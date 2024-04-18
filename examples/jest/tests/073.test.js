const { slowSum } = require('..');

test("should sleep for 5 seconds (073)", async () => {
    const result = await slowSum(12, 29);
    expect(result).toBe(41)
}, 10000)
