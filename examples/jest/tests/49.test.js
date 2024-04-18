const { sleep, sum } = require('..');

test("should sleep for 5 seconds (49)", async () => {
    await sleep(5000)
    expect(sum(27, 45)).toBe(72)
}, 10000)
