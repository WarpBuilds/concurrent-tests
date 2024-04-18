const { slowSum } = require('..');

test("should sleep for 5 seconds (24)", async () => {
    const result = await slowSum(0, 18);
    expect(result).toBe(18)
}, 10000)
