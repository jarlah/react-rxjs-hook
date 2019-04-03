# react-rxjs-hook

> 

[![NPM](https://img.shields.io/npm/v/react-rxjs-hook.svg)](https://www.npmjs.com/package/react-rxjs-hook) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-rxjs-hook react-rxjs rxjs
```

## Usage

```tsx
import React from 'react'

import { merge, Subject} from "rxjs";
import { map } from "rxjs/operators";
import { createStore } from 'react-rxjs';
import { useStore } from 'react-rxjs-hook'

const inc$ = new Subject();
const dec$ = new Subject();

const reducer$ = merge(
    inc$.pipe(map(() => (state) => state + 1)),
    dec$.pipe(map(() => (state) => state - 1))
);

const store$ = createStore("test", reducer$, 0);

const Counter = () => {
  const state = useStore(store$);
  return (
    <div>
      {state}
      <button onClick={() => inc$.next()}>+</button>
      <button onClick={() => dec$.next()}>-</button>
    </div>
  )
}
```

## License

MIT © [jarlah](https://github.com/jarlah)

---

This hook is created using [create-react-hook](https://github.com/hermanya/create-react-hook).
