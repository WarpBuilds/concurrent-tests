const { sleep, sum } = require('..');

test("should sleep for 5 seconds (84)", async () => {
    await sleep(5000)
    expect(sum(26, 43)).toBe(69)
}, 10000)
