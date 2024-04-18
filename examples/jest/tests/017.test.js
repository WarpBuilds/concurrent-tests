const { slowSum } = require('..');

test("should sleep for 5 seconds (017)", async () => {
    const result = await slowSum(45, 32);
    expect(result).toBe(77)
}, 10000)
