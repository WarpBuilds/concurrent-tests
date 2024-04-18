const { slowSum } = require('..');

test("should sleep for 5 seconds (49)", async () => {
    const result = await slowSum(15, 32);
    expect(result).toBe(47)
}, 10000)
