const { sleep, sum } = require('..');

test("should sleep for 5 seconds (12)", async () => {
    await sleep(5000)
    expect(sum(31, 87)).toBe(118)
}, 10000)
