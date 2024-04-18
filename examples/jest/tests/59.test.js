const { sleep, sum } = require('..');

test("should sleep for 5 seconds (59)", async () => {
    await sleep(5000)
    expect(sum(50, 67)).toBe(117)
}, 10000)
