# Concurrent jobs

✅ Explored & example setup
🚧 More exploration needed

## Jest ✅

- Native sharding: https://jestjs.io/docs/cli#--shard
- Default sharding is alphabetical
- If running a custom test sequencer, implement a shard method: https://jestjs.io/docs/configuration#testsequencer-string

## Playwright 🚧

- Native sharding: https://playwright.dev/docs/test-sharding 0

## Cypress 🚧

- Native parallelization: https://docs.cypress.io/guides/cloud/smart-orchestration/parallelization#Grouping-to-label-parallelization

## Pytest 🚧

- 3rd party package available: https://github.com/jerry-git/pytest-split
- https://github.com/jerry-git/pytest-split-gh-actions-demo/blob/master/.github/workflows/test.yml
- Code changes: https://www.edgedb.com/blog/how-we-sharded-our-test-suite-for-10x-faster-runs-on-github-actions

## Golang 🚧

- Test Sharding package by Google's Fuschsia team: https://pkg.go.dev/go.fuchsia.dev/fuchsia/tools/integration/testsharder#section-sourcefiles
