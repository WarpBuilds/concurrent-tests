const { slowSum } = require('..');

test("should sleep for 5 seconds (90)", async () => {
    const result = await slowSum(89, 39);
    expect(result).toBe(128)
}, 10000)
