Running builds and tests are probably the most common use-cases for GitHub Actions. Modern test frameworks and build systems have built-in support for sharding tests and remote execution.  It is essentially running your tests/builds parallely, not only in different threads or cores but distributing them across different machines.

In this guide we present how to set up concurrent tests for some of the popular test frameworks. We will explore how to set up concurrent tests for Jest, Playwright and Pytest.

# Jest

Jest is a popular JavaScript testing framework. It provides [native support for test sharding](https://jestjs.io/docs/cli#--shard) using the `--shard` option to run your tests in parallel across multiple *machines*. The `--shard` option takes an argument in the form of `shardIdx/shardCount`. Where `shardIdx` is a number representing index of the shard and `shardCount` is the total number of shards. By default, Jest will shard or split your test suites alphabetically.

A [simple benchmark running 100 dummy tests](https://github.com/WarpBuilds/concurrent-tests/actions/runs/8738287628) showed that sharding improves the performance of the test runs from 3 minutes to 30 seconds.

Here's how you can set it up in GitHub Actions:

```yaml
name: CI
on: push

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

# Playwright

Playwright is a popular end-to-end automation and testing framework for web applications. Playwright has [native support for test sharding](https://playwright.dev/docs/test-sharding) using the `--shard` option. Just like we saw with Jest earlier, rhe `--shard` option takes an argument in the form of `shardIdx/shardCount`. Where `shardIdx` is the index of the shard and `shardCount` is the total number of shards.

Sharding the tests improve the time from around 10 minutes to 1 minute 25 seconds for a [dummy test suite run](https://github.com/WarpBuilds/concurrent-tests/actions/runs/8740435954).

The setup is very similar to that of Jest:

```yaml
name: CI
on: push

jobs:
  tests:
    name: Tests
    runs-on: warp-ubuntu-latest-x64-4x

    strategy:
      fail-fast: false
      matrix:
        shardCount: [10]
        shardIndex: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
      - run: npm ci

      - name: Install Playwright browsers
        run: npx playwright install --with-deps

      - name: Run Playwright tests
        run: npx playwright test --shard=${{ matrix.shardIndex }}/${{ matrix.shardCount }}
```

# Pytest

Pytest is a widely used testing framework for Python. While it does not have native support for sharding tests across machines, there is a third-party Pytest plugin available called [pytest-split](https://github.com/jerry-git/pytest-split) which distributes tests on the basis of duration or name.

The performance gain in this case was really significant. The [dummy test runs](https://github.com/WarpBuilds/concurrent-tests/actions/runs/8738290262) showed a 10x improvement in test run times – from 500 to 50 seconds.

The setup is simple and involves installing the `pytest-split` package and running pytest with the `--splits` and `--group` options:

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

# Comparison & Notes

All of the workflows, dummy tests used and their runs can be found in the our [concurrent-tests](https://github.com/WarpBuilds/concurrent-tests) repository. Here is a table comparing the performance of the test runs:

| Test Framework | Default | Sharded | Improvement |
| -------------- | ------- | ------- | ----------- |
| Jest           | 3m      | 30s     | 6x          |
| Playwright     | 10m     | 1m 25s  | 7x          |
| Pytest         | 8m 20s  | 50s     | 10x         |

> [!NOTE]: A very important thing to keep in mind before sharding your tests is the jobs run **all** the steps inside the matrix again. This includes dependency installs, fetching thrid party actions, etc. These steps could add significant overhead which might not be worth it for small test suites and in some cases, might even slow down the overall run time. It is important to benchmark and test the performance of your test suite before and after sharding. Usually, the performance gain is significant for large test suites.
>
> For example, in case of Playwright, we need to install the browsers for each shard. This could be a significant overhead for small test suites and the performance gain might not be worth it or even inexistent.

# An annoying limitation

While GitHub Actions' matrix strategy is really handy for parallelizing our tests and builds, a constraint that can't be ignored for performance is the imposed limit on number of concurrent jobs. GitHub has [a limit of 20 concurrent jobs per account](https://docs.github.com/en/actions/learn-github-actions/usage-limits-billing-and-administration#usage-limits). You can increase this limit to 40 on a pro account or 60 on a team account. But it's still what it is, a limit.

This limit is annoying because it does not let you take the full advantage of these modern test frameworks and build systems that have built-in support for sharding and remote execution. GitHub Actions limits the number of concurrent jobs you can run thus limiting the parallelization. **At [WarpBuild](https://warpbuild.com), we do NOT define any kind of limit on the number of concurrent jobs**. You can run as many jobs as you want. Your tests and builds deserve all the breathing space to run as fast as possible.

> [!NOTE]
> Even if WarpBuild doesn't impose a concurrency limitation, there is an upstream constraint by GitHub which limits the maximum number of jobs generated by a job matrix to 256. But that limit is seldom the problem in practice.
