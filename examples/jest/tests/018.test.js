const { slowSum } = require('..');

test("should sleep for 5 seconds (018)", async () => {
    const result = await slowSum(76, 31);
    expect(result).toBe(107)
}, 10000)
