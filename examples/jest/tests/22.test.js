const { slowSum } = require('..');

test("should sleep for 5 seconds (22)", async () => {
    const result = await slowSum(48, 65);
    expect(result).toBe(113)
}, 10000)
