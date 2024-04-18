const { sleep, sum } = require('..');

test("should sleep for 5 seconds (7)", async () => {
    await sleep(5000)
    expect(sum(88, 6)).toBe(94)
}, 10000)
