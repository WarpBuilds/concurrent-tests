const { sleep, sum } = require('.');

test("should sleep for 5 seconds", async () => {
    await sleep(5000)
    expect(sum(21, 21)).toBe(42)
}, 10000)

