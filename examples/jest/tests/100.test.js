const { sleep, sum } = require('..');

test("should sleep for 5 seconds (100)", async () => {
    await sleep(5000)
    expect(sum(4, 21)).toBe(25)
}, 10000)
