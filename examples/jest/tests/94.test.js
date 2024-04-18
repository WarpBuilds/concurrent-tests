const { slowSum } = require('..');

test("should sleep for 5 seconds (94)", async () => {
    const result = await slowSum(62, 80);
    expect(result).toBe(142)
}, 10000)
