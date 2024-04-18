const { sleep, sum } = require('..');

test("should sleep for 5 seconds (67)", async () => {
    await sleep(5000)
    expect(sum(35, 52)).toBe(87)
}, 10000)
