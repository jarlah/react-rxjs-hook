import React from 'react'

import { useStore } from 'mytest-hook'
import { merge, Subject} from "rxjs";
import { createStore } from 'react-rxjs';
import { map } from "rxjs/operators";

const inc$ = new Subject();
const dec$ = new Subject();

const reducer$ = merge(
    inc$.pipe(map(() => (state) => state + 1)),
    dec$.pipe(map(() => (state) => state - 1))
);

const store$ = createStore("test", reducer$, 0);

const App = () => {
  const state = useStore(store$);
  return (
    <div>
      {state}
      <button onClick={() => inc$.next()}>+</button>
      <button onClick={() => dec$.next()}>-</button>
    </div>
  )
}

export default App
