const { slowSum } = require('..');

test("should sleep for 5 seconds (050)", async () => {
    const result = await slowSum(25, 51);
    expect(result).toBe(76)
}, 10000)
