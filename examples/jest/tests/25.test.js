const { sleep, sum } = require('..');

test("should sleep for 5 seconds (25)", async () => {
    await sleep(5000)
    expect(sum(17, 73)).toBe(90)
}, 10000)
