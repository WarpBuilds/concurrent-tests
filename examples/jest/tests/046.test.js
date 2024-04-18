const { slowSum } = require('..');

test("should sleep for 5 seconds (046)", async () => {
    const result = await slowSum(14, 31);
    expect(result).toBe(45)
}, 10000)
