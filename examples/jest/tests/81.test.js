const { sleep, sum } = require('..');

test("should sleep for 5 seconds (81)", async () => {
    await sleep(5000)
    expect(sum(45, 62)).toBe(107)
}, 10000)
