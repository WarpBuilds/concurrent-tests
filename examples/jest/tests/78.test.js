const { slowSum } = require('..');

test("should sleep for 5 seconds (78)", async () => {
    const result = await slowSum(64, 81);
    expect(result).toBe(145)
}, 10000)
