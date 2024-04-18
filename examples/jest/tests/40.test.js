const { sleep, sum } = require('..');

test("should sleep for 5 seconds (40)", async () => {
    await sleep(5000)
    expect(sum(42, 91)).toBe(133)
}, 10000)
