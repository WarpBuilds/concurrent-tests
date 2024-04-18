const { sleep, sum } = require('..');

test("should sleep for 5 seconds (70)", async () => {
    await sleep(5000)
    expect(sum(47, 65)).toBe(112)
}, 10000)
