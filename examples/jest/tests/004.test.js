const { slowSum } = require('..');

test("should sleep for 5 seconds (004)", async () => {
    const result = await slowSum(79, 96);
    expect(result).toBe(175)
}, 10000)
