const { sleep, sum } = require('..');

test("should sleep for 5 seconds (56)", async () => {
    await sleep(5000)
    expect(sum(69, 86)).toBe(155)
}, 10000)
