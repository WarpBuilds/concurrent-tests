const { sleep, sum } = require('..');

test("should sleep for 5 seconds (46)", async () => {
    await sleep(5000)
    expect(sum(76, 94)).toBe(170)
}, 10000)
