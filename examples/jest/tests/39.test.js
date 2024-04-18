const { sleep, sum } = require('..');

test("should sleep for 5 seconds (39)", async () => {
    await sleep(5000)
    expect(sum(82, 99)).toBe(181)
}, 10000)
