const { slowSum } = require('..');

test("should sleep for 5 seconds (056)", async () => {
    const result = await slowSum(11, 36);
    expect(result).toBe(47)
}, 10000)
