const { slowSum } = require('..');

test("should sleep for 5 seconds (066)", async () => {
    const result = await slowSum(43, 60);
    expect(result).toBe(103)
}, 10000)
