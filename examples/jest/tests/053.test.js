const { slowSum } = require('..');

test("should sleep for 5 seconds (053)", async () => {
    const result = await slowSum(77, 94);
    expect(result).toBe(171)
}, 10000)
