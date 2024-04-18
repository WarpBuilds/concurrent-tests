const { sleep, sum } = require('..');

test("should sleep for 5 seconds (11)", async () => {
    await sleep(5000)
    expect(sum(13, 48)).toBe(61)
}, 10000)
