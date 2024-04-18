const { slowSum } = require('..');

test("should sleep for 5 seconds (65)", async () => {
    const result = await slowSum(84, 1);
    expect(result).toBe(85)
}, 10000)
