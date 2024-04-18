const { sleep, sum } = require('..');

test("should sleep for 5 seconds (20)", async () => {
    await sleep(5000)
    expect(sum(98, 15)).toBe(113)
}, 10000)
