const { slowSum } = require('..');

test("should sleep for 5 seconds (74)", async () => {
    const result = await slowSum(90, 8);
    expect(result).toBe(98)
}, 10000)
