const { slowSum } = require('..');

test("should sleep for 5 seconds (10)", async () => {
    const result = await slowSum(60, 78);
    expect(result).toBe(138)
}, 10000)
