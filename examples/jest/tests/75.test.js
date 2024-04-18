const { sleep, sum } = require('..');

test("should sleep for 5 seconds (75)", async () => {
    await sleep(5000)
    expect(sum(81, 98)).toBe(179)
}, 10000)
