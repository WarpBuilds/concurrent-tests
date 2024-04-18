const { sleep, sum } = require('..');

test("should sleep for 5 seconds (9)", async () => {
    await sleep(5000)
    expect(sum(79, 22)).toBe(101)
}, 10000)
