# Notes

- GitHub limitations: https://docs.github.com/en/actions/learn-github-actions/usage-limits-billing-and-administration

# Concurrent tests

✅ Explored & example setup

🚧 More exploration needed

## Jest ✅

- Native sharding: https://jestjs.io/docs/cli#--shard
- Default sharding is alphabetical
- If running a custom test sequencer, implement a shard method: https://jestjs.io/docs/configuration#testsequencer-string
- [3 minutes vs. 30 seconds](https://github.com/WarpBuilds/concurrent-tests/actions/runs/8733327759)

## Playwright ✅

- Native sharding: https://playwright.dev/docs/test-sharding

## Cypress 🚧

- Native parallelization: https://docs.cypress.io/guides/cloud/smart-orchestration/parallelization#Grouping-to-label-parallelization

## Pytest ✅

- 3rd party package available: https://github.com/jerry-git/pytest-split
- https://github.com/jerry-git/pytest-split-gh-actions-demo/blob/master/.github/workflows/test.yml
- Code changes: https://www.edgedb.com/blog/how-we-sharded-our-test-suite-for-10x-faster-runs-on-github-actions

## Golang 🚧

- Test Sharding package by Google's Fuschsia team: https://pkg.go.dev/go.fuchsia.dev/fuchsia/tools/integration/testsharder#section-sourcefiles
