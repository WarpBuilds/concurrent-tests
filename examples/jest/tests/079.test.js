const { slowSum } = require('..');

test("should sleep for 5 seconds (079)", async () => {
    const result = await slowSum(18, 35);
    expect(result).toBe(53)
}, 10000)
