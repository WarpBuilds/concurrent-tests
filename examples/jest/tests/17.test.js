const { sleep, sum } = require('..');

test("should sleep for 5 seconds (17)", async () => {
    await sleep(5000)
    expect(sum(63, 80)).toBe(143)
}, 10000)
