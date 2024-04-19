# Concurrent tests in GitHub Actions

This repo contains the code, workflows and the runs that are mentioned in the blog post [Concurrent tests in GitHub Actions](https://warpbuild.com/blog/concurrent-tests). It contains examples of how to run tests simultaneously on multiple machines using GitHub Actions (sharding tests).

A summary of the results is presented below:

| Test Framework | Default | Sharded x10 | Improvement | Workflow Run                                                                   |
| -------------- | ------- | ----------- | ----------- | ------------------------------------------------------------------------------ |
| Jest           | 3m      | 30s         | 6x          | [Link](https://github.com/WarpBuilds/concurrent-tests/actions/runs/8738287628) |
| Playwright     | 5m 26s  | 1m 25s      | 3.8x        | [Link](https://github.com/WarpBuilds/concurrent-tests/actions/runs/8740435954) |
| Pytest         | 8m 20s  | 50s         | 10x         | [Link](https://github.com/WarpBuilds/concurrent-tests/actions/runs/8738290262) |

