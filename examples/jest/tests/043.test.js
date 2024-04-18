const { slowSum } = require('..');

test("should sleep for 5 seconds (043)", async () => {
    const result = await slowSum(71, 89);
    expect(result).toBe(160)
}, 10000)
