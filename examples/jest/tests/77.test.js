const { slowSum } = require('..');

test("should sleep for 5 seconds (77)", async () => {
    const result = await slowSum(71, 20);
    expect(result).toBe(91)
}, 10000)
