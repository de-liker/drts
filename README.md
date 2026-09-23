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

## Release

Releases run on [tagpr](https://github.com/Songmu/tagpr). Merging a pull request into
`main` opens or updates a release pull request, and merging that one bumps the version,
updates `CHANGELOG.md` and pushes a `vX.Y.Z` tag.

Bumps are patch by default. Put a `major` or `minor` label on a pull request to change
that.

## Author

Qs-F, DE LIKER

## License

MIT
