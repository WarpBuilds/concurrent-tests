const { sleep, sum } = require('.');

test("should sleep for 5 seconds (2)", async () => {
    await sleep(5000)
    expect(sum(1, 2)).toBe(3)
}, 10000)

