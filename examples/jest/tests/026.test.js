const { slowSum } = require('..');

test("should sleep for 5 seconds (026)", async () => {
    const result = await slowSum(42, 68);
    expect(result).toBe(110)
}, 10000)
