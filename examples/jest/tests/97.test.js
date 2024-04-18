const { sleep, sum } = require('..');

test("should sleep for 5 seconds (97)", async () => {
    await sleep(5000)
    expect(sum(23, 40)).toBe(63)
}, 10000)
