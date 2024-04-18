const { sleep, sum } = require('..');

test("should sleep for 5 seconds (48)", async () => {
    await sleep(5000)
    expect(sum(97, 14)).toBe(111)
}, 10000)
