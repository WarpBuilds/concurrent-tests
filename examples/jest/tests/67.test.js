const { slowSum } = require('..');

test("should sleep for 5 seconds (67)", async () => {
    const result = await slowSum(36, 54);
    expect(result).toBe(90)
}, 10000)
