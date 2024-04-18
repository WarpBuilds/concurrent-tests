const { sleep, sum } = require('..');

test("should sleep for 5 seconds (18)", async () => {
    await sleep(5000)
    expect(sum(2, 98)).toBe(100)
}, 10000)
