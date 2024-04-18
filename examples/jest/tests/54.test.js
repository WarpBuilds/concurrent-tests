const { slowSum } = require('..');

test("should sleep for 5 seconds (54)", async () => {
    const result = await slowSum(86, 36);
    expect(result).toBe(122)
}, 10000)
