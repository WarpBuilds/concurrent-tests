const { sleep, sum } = require('..');

test("should sleep for 5 seconds (29)", async () => {
    await sleep(5000)
    expect(sum(42, 98)).toBe(140)
}, 10000)
