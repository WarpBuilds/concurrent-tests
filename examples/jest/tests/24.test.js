const { sleep, sum } = require('..');

test("should sleep for 5 seconds (24)", async () => {
    await sleep(5000)
    expect(sum(61, 87)).toBe(148)
}, 10000)
