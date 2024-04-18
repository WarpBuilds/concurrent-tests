const { sleep, sum } = require('..');

test("should sleep for 5 seconds (44)", async () => {
    await sleep(5000)
    expect(sum(85, 3)).toBe(88)
}, 10000)
