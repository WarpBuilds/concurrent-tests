const { slowSum } = require('..');

test("should sleep for 5 seconds (055)", async () => {
    const result = await slowSum(21, 38);
    expect(result).toBe(59)
}, 10000)
