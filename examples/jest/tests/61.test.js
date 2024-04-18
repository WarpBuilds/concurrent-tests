const { sleep, sum } = require('..');

test("should sleep for 5 seconds (61)", async () => {
    await sleep(5000)
    expect(sum(2, 20)).toBe(22)
}, 10000)
