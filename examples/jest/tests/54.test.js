const { sleep, sum } = require('..');

test("should sleep for 5 seconds (54)", async () => {
    await sleep(5000)
    expect(sum(78, 95)).toBe(173)
}, 10000)
