const { slowSum } = require('..');

test("should sleep for 5 seconds (001)", async () => {
    const result = await slowSum(36, 53);
    expect(result).toBe(89)
}, 10000)
