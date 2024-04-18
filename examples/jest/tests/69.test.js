const { sleep, sum } = require('..');

test("should sleep for 5 seconds (69)", async () => {
    await sleep(5000)
    expect(sum(87, 4)).toBe(91)
}, 10000)
