const { slowSum } = require('..');

test("should sleep for 5 seconds (59)", async () => {
    const result = await slowSum(20, 69);
    expect(result).toBe(89)
}, 10000)
