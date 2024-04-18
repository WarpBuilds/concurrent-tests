const { slowSum } = require('..');

test("should sleep for 5 seconds (61)", async () => {
    const result = await slowSum(11, 28);
    expect(result).toBe(39)
}, 10000)
