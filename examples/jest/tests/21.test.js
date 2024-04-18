const { sleep, sum } = require('..');

test("should sleep for 5 seconds (21)", async () => {
    await sleep(5000)
    expect(sum(67, 22)).toBe(89)
}, 10000)
