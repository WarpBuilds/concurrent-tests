const { slowSum } = require('..');

test("should sleep for 5 seconds (089)", async () => {
    const result = await slowSum(59, 76);
    expect(result).toBe(135)
}, 10000)
