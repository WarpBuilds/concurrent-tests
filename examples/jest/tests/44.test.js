const { slowSum } = require('..');

test("should sleep for 5 seconds (44)", async () => {
    const result = await slowSum(81, 98);
    expect(result).toBe(179)
}, 10000)
