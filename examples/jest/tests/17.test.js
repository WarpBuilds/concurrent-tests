const { slowSum } = require('..');

test("should sleep for 5 seconds (17)", async () => {
    const result = await slowSum(14, 32);
    expect(result).toBe(46)
}, 10000)
