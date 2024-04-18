const { sleep, sum } = require('..');

test("should sleep for 5 seconds (82)", async () => {
    await sleep(5000)
    expect(sum(5, 22)).toBe(27)
}, 10000)
