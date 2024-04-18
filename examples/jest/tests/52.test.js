const { sleep, sum } = require('..');

test("should sleep for 5 seconds (52)", async () => {
    await sleep(5000)
    expect(sum(87, 43)).toBe(130)
}, 10000)
