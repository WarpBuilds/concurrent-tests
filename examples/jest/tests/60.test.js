const { slowSum } = require('..');

test("should sleep for 5 seconds (60)", async () => {
    const result = await slowSum(12, 68);
    expect(result).toBe(80)
}, 10000)
