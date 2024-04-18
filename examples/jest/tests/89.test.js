const { sleep, sum } = require('..');

test("should sleep for 5 seconds (89)", async () => {
    await sleep(5000)
    expect(sum(29, 47)).toBe(76)
}, 10000)
