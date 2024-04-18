const { slowSum } = require('..');

test("should sleep for 5 seconds (52)", async () => {
    const result = await slowSum(27, 45);
    expect(result).toBe(72)
}, 10000)
