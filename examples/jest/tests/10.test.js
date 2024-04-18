const { sleep, sum } = require('..');

test("should sleep for 5 seconds (10)", async () => {
    await sleep(5000)
    expect(sum(36, 61)).toBe(97)
}, 10000)
