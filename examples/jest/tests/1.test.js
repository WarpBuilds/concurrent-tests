const { sleep, sum } = require('..');

test("should sleep for 5 seconds (1)", async () => {
    await sleep(5000)
    expect(sum(47, 34)).toBe(81)
}, 10000)
