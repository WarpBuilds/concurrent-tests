const { sleep, sum } = require('..');

test("should sleep for 5 seconds (74)", async () => {
    await sleep(5000)
    expect(sum(21, 38)).toBe(59)
}, 10000)
