const { sleep, sum } = require('..');

test("should sleep for 5 seconds (31)", async () => {
    await sleep(5000)
    expect(sum(33, 50)).toBe(83)
}, 10000)
