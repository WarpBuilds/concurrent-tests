const { sleep, sum } = require('..');

test("should sleep for 5 seconds (71)", async () => {
    await sleep(5000)
    expect(sum(8, 25)).toBe(33)
}, 10000)
