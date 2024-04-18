const { sleep, sum } = require('..');

test("should sleep for 5 seconds (36)", async () => {
    await sleep(5000)
    expect(sum(31, 48)).toBe(79)
}, 10000)
