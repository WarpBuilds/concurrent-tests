const { slowSum } = require('..');

test("should sleep for 5 seconds (099)", async () => {
    const result = await slowSum(91, 9);
    expect(result).toBe(100)
}, 10000)
