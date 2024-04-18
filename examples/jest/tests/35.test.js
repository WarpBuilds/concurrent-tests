const { slowSum } = require('..');

test("should sleep for 5 seconds (35)", async () => {
    const result = await slowSum(66, 83);
    expect(result).toBe(149)
}, 10000)
