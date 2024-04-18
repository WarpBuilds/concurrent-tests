const { slowSum } = require('..');

test("should sleep for 5 seconds (33)", async () => {
    const result = await slowSum(45, 63);
    expect(result).toBe(108)
}, 10000)
