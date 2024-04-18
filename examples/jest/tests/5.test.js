const { slowSum } = require('..');

test("should sleep for 5 seconds (5)", async () => {
    const result = await slowSum(27, 44);
    expect(result).toBe(71)
}, 10000)
