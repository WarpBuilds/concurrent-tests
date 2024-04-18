const { sleep, sum } = require('..');

test("should sleep for 5 seconds (19)", async () => {
    await sleep(5000)
    expect(sum(97, 84)).toBe(181)
}, 10000)
