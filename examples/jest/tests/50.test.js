const { slowSum } = require('..');

test("should sleep for 5 seconds (50)", async () => {
    const result = await slowSum(75, 92);
    expect(result).toBe(167)
}, 10000)
