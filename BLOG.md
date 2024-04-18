Running builds and tests are probably the most common use-cases for GitHub Actions. While it does it well, it is also very limiting when it comes to performance. A constraint that can't be ignored for performance is GitHub Action's concurrency limit. GitHub has [a limit of 20 concurrent jobs per account](https://docs.github.com/en/actions/learn-github-actions/usage-limits-billing-and-administration#usage-limits). You can increase this limit to 40 on a pro account or 60 on a team account. But it's still what it is, a limit.

This limit is annoying because it does not let you take the full advantage of modern test frameworks and build systems that have built-in support for sharding and remote execution[^1]. GitHub Actions limits the number of concurrent jobs you can run thus limiting the parallelization. 

**WarpBuild handles this prblem by NOT having any kind of limit on the number of concurrent jobs**. You can run as many jobs as you want. Your tests and builds deserve all the breathing space to run as fast as possible.

In this guide we present how to set up concurrent tests for some of the most popular test frameworks. We will explore how to set up concurrent tests for Jest, Playwright, Cypress, Pytest, and Golang.

# Jest

Jest is a popular JavaScript testing framework. By default, Jest runs tests in parallel using multiple processes which is limited by the systems's CPU. The real upgrade is the [native support for test sharding](https://jestjs.io/docs/cli#--shard) using the `--shard` flag to run your tests in parallel across multiple *machines* altogether. The `--shard` flag takes an argument in the form of `shardIdx/shardCount`. Where `shardIdx` is a number representing index of the shard and `shardCount` is the total number of shards. By default, Jest will shard or split your test suites alphabetically.

A [simple benchmark running 100 dummy tests](https://github.com/WarpBuilds/concurrent-tests/actions/runs/8733327759) showed that sharding improves the performance of the test runs from 3 minutes to 30 seconds.

Here's how you can set it up in GitHub Actions:

```yaml
name: CI
on: workflow_dispatch

jobs:
  test:
    name: Tests
    runs-on: warp-ubuntu-latest-x64-4x

    strategy:
      fail-fast: false
      matrix:
        shardCount: [10]
        shardIdx: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
      - run: npm ci
    
      - name: Run Jest tests
        run: npx jest --shard=${{ matrix.shardIdx }}/${{ matrix.shardCount }}
```

# Pytest

Pytest is a widely used testing framework for Python. While it does not have native support for sharding tests across machines, there is a third-party Pytest plugin available called [pytest-split](https://github.com/jerry-git/pytest-split) which distributes tests on the basis of duration or name.

Here's how you can set it up in GitHub Actions:

```yaml
jobs:
  test:
    name: Tests
    runs-on: warp-ubuntu-latest-x64-4x

    strategy:
      fail-fast: false
      matrix:
        splitCount: [10]
        group: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-python@v5
      - run: pip install pytest pytest-split

      - name: Run pytest
        run: pytest --splits ${{ matrix.splitCount }} --group ${{ matrix.group }}
```

---
[^1]: It is essentially running your tests/builds parallely, not only in different threads or cores but distributing them across different machines altogether.