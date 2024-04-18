const { sleep, sum } = require('..');

test("should sleep for 5 seconds (42)", async () => {
    await sleep(5000)
    expect(sum(95, 12)).toBe(107)
}, 10000)
