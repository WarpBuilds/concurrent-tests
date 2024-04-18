const { sleep, sum } = require('..');

test("should sleep for 5 seconds (43)", async () => {
    await sleep(5000)
    expect(sum(25, 42)).toBe(67)
}, 10000)
