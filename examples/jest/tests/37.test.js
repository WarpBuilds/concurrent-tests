const { slowSum } = require('..');

test("should sleep for 5 seconds (37)", async () => {
    const result = await slowSum(18, 36);
    expect(result).toBe(54)
}, 10000)
