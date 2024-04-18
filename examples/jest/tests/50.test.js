const { sleep, sum } = require('..');

test("should sleep for 5 seconds (50)", async () => {
    await sleep(5000)
    expect(sum(88, 5)).toBe(93)
}, 10000)
