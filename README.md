# loopring-usage-example

Created to debug the following issue: 
https://github.com/Loopring/loopring_sdk/issues/65

## Prerequisites

- `nvm`

## How to run this example project

```bash
# step 1 -- use correct node version
nvm use
# step 2 -- enable package manager support
corepack enable
# step 3 -- install dependencies
yarn
# step 4 -- build the app
yarn build
# step 5 -- run the app
yarn start
```

## Two versions of the issue

There is one version of the app on `commonjs` branch (the same as `master`) and one on the `esm` branch.
