import * as React from 'react';
import {Store, DevToolsInstance, getExtension, isRelevant} from "react-rxjs";
import {tap} from "rxjs/operators";

export function useStore<StoreProps>(store: Store<StoreProps, StoreProps>,
                                     initialProps: StoreProps) {
  const [state, setState] = React.useState<StoreProps>(initialProps);
  React.useEffect(() => {
    let devToolsInstance: DevToolsInstance
    let devToolsSubscription: () => void;
    let devToolsExtension = getExtension()
    if (devToolsExtension) {
      devToolsInstance = devToolsExtension.connect()
      devToolsSubscription = devToolsInstance.subscribe(message => {
        if (isRelevant(message)) {
          setState(JSON.parse(message.state))
        }
      })
    }
    const observable = typeof store !== "function" ? store : store(initialProps);
    const subscription = observable
      .pipe(tap(setState), tap(state => {
        if (devToolsInstance) {
          devToolsInstance.send("update", state);
        }
      }))
      .subscribe()
    return () => {
      if (devToolsSubscription) {
        devToolsSubscription()
      }
      subscription.unsubscribe();
    };
  }, []);
  return state;
}
