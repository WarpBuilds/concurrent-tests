const { slowSum } = require('..');

test("should sleep for 5 seconds (40)", async () => {
    const result = await slowSum(70, 87);
    expect(result).toBe(157)
}, 10000)
