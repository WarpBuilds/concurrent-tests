const { slowSum } = require('..');

test("should sleep for 5 seconds (010)", async () => {
    const result = await slowSum(46, 64);
    expect(result).toBe(110)
}, 10000)
