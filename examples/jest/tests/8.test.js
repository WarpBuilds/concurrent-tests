const { sleep, sum } = require('..');

test("should sleep for 5 seconds (8)", async () => {
    await sleep(5000)
    expect(sum(19, 36)).toBe(55)
}, 10000)
