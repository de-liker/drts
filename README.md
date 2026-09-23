# pkg `drts`

`drts` is DE LIKER's TypeScript and React style guide, built on [Biome](https://biomejs.dev/).

![test](../../actions/workflows/test.yml/badge.svg)

## Installation

This package is not published to npm. Install it straight from GitHub, pinned to a tag:

```
npm install --save-dev github:de-liker/drts#v2.0.0 @biomejs/biome
```

That writes the dependency as `"@de-liker/drts": "github:de-liker/drts#v2.0.0"`, and the
lockfile records the exact commit the tag points at. Renovate opens a PR when a newer
tag is published.

## Usage

Extend `@de-liker/drts/biome` from your `biome.json`.

```json
{
  "$schema": "https://biomejs.dev/schemas/2.5.14/schema.json",
  "extends": ["@de-liker/drts/biome"]
}
```

Then run Biome as usual:

```json
{
  "scripts": {
    "lint": "biome check ./",
    "fmt": "biome check --write ./"
  }
}
```

The shared config turns on `vcs.useIgnoreFile`, so Biome expects a `.gitignore` next to
your `biome.json`.

## Release

Releases run on [tagpr](https://github.com/Songmu/tagpr). Merging a pull request into
`main` opens or updates a release pull request, and merging that one bumps the version,
updates `CHANGELOG.md` and pushes the `vX.Y.Z` tag that consumers pin. Nothing is
published to npm.

Bumps are patch by default. Put a `major` or `minor` label on a pull request to change
that.

## Author

Qs-F, DE LIKER

## License

MIT
