const { sleep, sum } = require('..');

test("should sleep for 5 seconds (68)", async () => {
    await sleep(5000)
    expect(sum(27, 44)).toBe(71)
}, 10000)
