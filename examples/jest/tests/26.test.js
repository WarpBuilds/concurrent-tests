const { sleep, sum } = require('..');

test("should sleep for 5 seconds (26)", async () => {
    await sleep(5000)
    expect(sum(12, 29)).toBe(41)
}, 10000)
