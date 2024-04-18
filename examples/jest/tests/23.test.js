const { sleep, sum } = require('..');

test("should sleep for 5 seconds (23)", async () => {
    await sleep(5000)
    expect(sum(83, 0)).toBe(83)
}, 10000)
