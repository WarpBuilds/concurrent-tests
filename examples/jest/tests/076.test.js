const { slowSum } = require('..');

test("should sleep for 5 seconds (076)", async () => {
    const result = await slowSum(46, 63);
    expect(result).toBe(109)
}, 10000)
