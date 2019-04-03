# mytest-hook

> 

[![NPM](https://img.shields.io/npm/v/mytest-hook.svg)](https://www.npmjs.com/package/mytest-hook) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save mytest-hook
```

## Usage

```tsx
import * as React from 'react'

import { useMyHook } from 'mytest-hook'

const Example = () => {
  const example = useMyHook()
  return (
    <div>
      {example}
    </div>
  )
}
```

## License

MIT © [jarlah](https://github.com/jarlah)

---

This hook is created using [create-react-hook](https://github.com/hermanya/create-react-hook).
