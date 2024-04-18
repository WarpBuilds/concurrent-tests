const { sleep, sum } = require('..');

test("should sleep for 5 seconds (35)", async () => {
    await sleep(5000)
    expect(sum(70, 87)).toBe(157)
}, 10000)
