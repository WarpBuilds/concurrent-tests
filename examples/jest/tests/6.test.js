const { sleep, sum } = require('..');

test("should sleep for 5 seconds (6)", async () => {
    await sleep(5000)
    expect(sum(11, 98)).toBe(109)
}, 10000)
