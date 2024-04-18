const { sleep, sum } = require('..');

test("should sleep for 5 seconds (85)", async () => {
    await sleep(5000)
    expect(sum(86, 3)).toBe(89)
}, 10000)
