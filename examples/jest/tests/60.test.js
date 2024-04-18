const { sleep, sum } = require('..');

test("should sleep for 5 seconds (60)", async () => {
    await sleep(5000)
    expect(sum(10, 59)).toBe(69)
}, 10000)
