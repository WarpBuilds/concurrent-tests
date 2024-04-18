const { sleep, sum } = require('..');

test("should sleep for 5 seconds (86)", async () => {
    await sleep(5000)
    expect(sum(78, 96)).toBe(174)
}, 10000)
