const { slowSum } = require('..');

test("should sleep for 5 seconds (080)", async () => {
    const result = await slowSum(78, 96);
    expect(result).toBe(174)
}, 10000)
