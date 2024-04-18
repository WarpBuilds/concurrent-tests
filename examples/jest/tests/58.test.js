const { sleep, sum } = require('..');

test("should sleep for 5 seconds (58)", async () => {
    await sleep(5000)
    expect(sum(90, 7)).toBe(97)
}, 10000)
