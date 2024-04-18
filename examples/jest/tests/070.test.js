const { slowSum } = require('..');

test("should sleep for 5 seconds (070)", async () => {
    const result = await slowSum(37, 86);
    expect(result).toBe(123)
}, 10000)
