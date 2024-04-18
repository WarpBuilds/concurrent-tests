const { slowSum } = require('..');

test("should sleep for 5 seconds (32)", async () => {
    const result = await slowSum(85, 2);
    expect(result).toBe(87)
}, 10000)
