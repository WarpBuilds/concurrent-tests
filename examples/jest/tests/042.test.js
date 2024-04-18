const { slowSum } = require('..');

test("should sleep for 5 seconds (042)", async () => {
    const result = await slowSum(49, 67);
    expect(result).toBe(116)
}, 10000)
