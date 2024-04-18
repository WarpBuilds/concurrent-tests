const { slowSum } = require('..');

test("should sleep for 5 seconds (082)", async () => {
    const result = await slowSum(61, 78);
    expect(result).toBe(139)
}, 10000)
