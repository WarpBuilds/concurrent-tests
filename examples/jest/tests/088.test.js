const { slowSum } = require('..');

test("should sleep for 5 seconds (088)", async () => {
    const result = await slowSum(37, 54);
    expect(result).toBe(91)
}, 10000)
