const { sleep, sum } = require('..');

test("should sleep for 5 seconds (51)", async () => {
    await sleep(5000)
    expect(sum(18, 36)).toBe(54)
}, 10000)
