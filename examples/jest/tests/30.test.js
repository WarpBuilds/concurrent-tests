const { sleep, sum } = require('..');

test("should sleep for 5 seconds (30)", async () => {
    await sleep(5000)
    expect(sum(41, 58)).toBe(99)
}, 10000)
