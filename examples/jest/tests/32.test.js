const { sleep, sum } = require('..');

test("should sleep for 5 seconds (32)", async () => {
    await sleep(5000)
    expect(sum(93, 10)).toBe(103)
}, 10000)
