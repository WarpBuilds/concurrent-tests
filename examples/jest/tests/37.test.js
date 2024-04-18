const { sleep, sum } = require('..');

test("should sleep for 5 seconds (37)", async () => {
    await sleep(5000)
    expect(sum(91, 8)).toBe(99)
}, 10000)
