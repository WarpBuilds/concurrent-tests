const { slowSum } = require('..');

test("should sleep for 5 seconds (75)", async () => {
    const result = await slowSum(51, 68);
    expect(result).toBe(119)
}, 10000)
