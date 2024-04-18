const { slowSum } = require('..');

test("should sleep for 5 seconds (56)", async () => {
    const result = await slowSum(39, 56);
    expect(result).toBe(95)
}, 10000)
