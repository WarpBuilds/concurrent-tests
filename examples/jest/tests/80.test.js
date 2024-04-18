const { sleep, sum } = require('..');

test("should sleep for 5 seconds (80)", async () => {
    await sleep(5000)
    expect(sum(14, 32)).toBe(46)
}, 10000)
