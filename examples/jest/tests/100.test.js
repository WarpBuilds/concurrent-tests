const { slowSum } = require('..');

test("should sleep for 5 seconds (100)", async () => {
    const result = await slowSum(81, 31);
    expect(result).toBe(112)
}, 10000)
