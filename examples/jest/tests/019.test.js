const { slowSum } = require('..');

test("should sleep for 5 seconds (019)", async () => {
    const result = await slowSum(91, 58);
    expect(result).toBe(149)
}, 10000)
