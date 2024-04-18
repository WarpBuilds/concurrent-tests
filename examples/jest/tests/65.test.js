const { sleep, sum } = require('..');

test("should sleep for 5 seconds (65)", async () => {
    await sleep(5000)
    expect(sum(14, 31)).toBe(45)
}, 10000)
