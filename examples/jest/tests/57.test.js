const { slowSum } = require('..');

test("should sleep for 5 seconds (57)", async () => {
    const result = await slowSum(99, 16);
    expect(result).toBe(115)
}, 10000)
