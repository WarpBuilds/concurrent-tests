const { slowSum } = require('..');

test("should sleep for 5 seconds (063)", async () => {
    const result = await slowSum(9, 26);
    expect(result).toBe(35)
}, 10000)
