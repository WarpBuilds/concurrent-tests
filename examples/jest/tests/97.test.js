const { slowSum } = require('..');

test("should sleep for 5 seconds (97)", async () => {
    const result = await slowSum(75, 93);
    expect(result).toBe(168)
}, 10000)
