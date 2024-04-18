const { sleep, sum } = require('..');

test("should sleep for 5 seconds (5)", async () => {
    await sleep(5000)
    expect(sum(72, 59)).toBe(131)
}, 10000)
