# pkg `drts`

`drts` is DE LIKER's TypeScript and React style guide. Inspired by [google/gts](https://github.com/google/gts).

![test](../../actions/workflows/test.yml/badge.svg)

## Installation

```
yarn add --dev @de-liker/drts
```

## Usage

In your `eslint.config.js`, please extend `@de-liker/drts`. Example usage is shown in `/examples/basic/eslint.config.js`.

```js
import drts from '@de-liker/drts'


export default [
  ...drts,
]
```

## Author

Qs-F, DE LIKER

## License

MIT
