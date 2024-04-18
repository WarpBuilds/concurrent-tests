const { slowSum } = require('..');

test("should sleep for 5 seconds (007)", async () => {
    const result = await slowSum(12, 30);
    expect(result).toBe(42)
}, 10000)
