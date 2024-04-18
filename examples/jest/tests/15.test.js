const { sleep, sum } = require('..');

test("should sleep for 5 seconds (15)", async () => {
    await sleep(5000)
    expect(sum(77, 3)).toBe(80)
}, 10000)
