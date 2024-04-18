const { slowSum } = require('..');

test("should sleep for 5 seconds (040)", async () => {
    const result = await slowSum(37, 55);
    expect(result).toBe(92)
}, 10000)
