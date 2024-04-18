const { slowSum } = require('..');

test("should sleep for 5 seconds (006)", async () => {
    const result = await slowSum(90, 40);
    expect(result).toBe(130)
}, 10000)
