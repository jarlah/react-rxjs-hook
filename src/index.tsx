import * as React from 'react';
import { Store } from "react-rxjs";
import { tap } from "rxjs/operators";

export function useStore<StoreProps>(store: Store<StoreProps, StoreProps>,
                                     initialProps: StoreProps) {
  const [state, setState] = React.useState<StoreProps>(initialProps);
  React.useEffect(() => {
    const observable = typeof store !== "function" ? store : store(state);
    const subscription = observable
      .pipe(tap(setState))
      .subscribe()
    return () => subscription.unsubscribe();
  }, []);
  return state;
}
