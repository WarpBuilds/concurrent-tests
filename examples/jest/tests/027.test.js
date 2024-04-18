const { slowSum } = require('..');

test("should sleep for 5 seconds (027)", async () => {
    const result = await slowSum(49, 66);
    expect(result).toBe(115)
}, 10000)
