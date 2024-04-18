const { sleep, sum } = require('..');

test("should sleep for 5 seconds (14)", async () => {
    await sleep(5000)
    expect(sum(86, 82)).toBe(168)
}, 10000)
