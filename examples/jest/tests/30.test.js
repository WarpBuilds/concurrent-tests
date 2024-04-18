const { slowSum } = require('..');

test("should sleep for 5 seconds (30)", async () => {
    const result = await slowSum(32, 50);
    expect(result).toBe(82)
}, 10000)
