const { slowSum } = require('..');

test("should sleep for 5 seconds (26)", async () => {
    const result = await slowSum(59, 9);
    expect(result).toBe(68)
}, 10000)
