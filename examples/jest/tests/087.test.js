const { slowSum } = require('..');

test("should sleep for 5 seconds (087)", async () => {
    const result = await slowSum(47, 64);
    expect(result).toBe(111)
}, 10000)
