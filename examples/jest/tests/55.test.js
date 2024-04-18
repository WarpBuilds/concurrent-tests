const { sleep, sum } = require('..');

test("should sleep for 5 seconds (55)", async () => {
    await sleep(5000)
    expect(sum(38, 56)).toBe(94)
}, 10000)
