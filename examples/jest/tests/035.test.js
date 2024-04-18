const { slowSum } = require('..');

test("should sleep for 5 seconds (035)", async () => {
    const result = await slowSum(16, 4);
    expect(result).toBe(20)
}, 10000)
