const { sleep, sum } = require('..');

test("should sleep for 5 seconds (16)", async () => {
    await sleep(5000)
    expect(sum(72, 77)).toBe(149)
}, 10000)
