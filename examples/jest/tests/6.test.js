const { slowSum } = require('..');

test("should sleep for 5 seconds (6)", async () => {
    const result = await slowSum(87, 4);
    expect(result).toBe(91)
}, 10000)
