const { sleep, sum } = require('..');

test("should sleep for 5 seconds (72)", async () => {
    await sleep(5000)
    expect(sum(68, 85)).toBe(153)
}, 10000)
