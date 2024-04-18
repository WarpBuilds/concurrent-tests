const { sleep, sum } = require('..');

test("should sleep for 5 seconds (47)", async () => {
    await sleep(5000)
    expect(sum(37, 54)).toBe(91)
}, 10000)
