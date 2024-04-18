const { sleep, sum } = require('..');

test("should sleep for 5 seconds (41)", async () => {
    await sleep(5000)
    expect(sum(34, 51)).toBe(85)
}, 10000)
