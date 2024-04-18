const { sleep, sum } = require('..');

test("should sleep for 5 seconds (53)", async () => {
    await sleep(5000)
    expect(sum(18, 35)).toBe(53)
}, 10000)
