const { sleep, sum } = require('..');

test("should sleep for 5 seconds (78)", async () => {
    await sleep(5000)
    expect(sum(62, 11)).toBe(73)
}, 10000)
