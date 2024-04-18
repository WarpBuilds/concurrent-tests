const { slowSum } = require('..');

test("should sleep for 5 seconds (14)", async () => {
    const result = await slowSum(34, 51);
    expect(result).toBe(85)
}, 10000)
