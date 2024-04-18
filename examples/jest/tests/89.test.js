const { slowSum } = require('..');

test("should sleep for 5 seconds (89)", async () => {
    const result = await slowSum(29, 46);
    expect(result).toBe(75)
}, 10000)
