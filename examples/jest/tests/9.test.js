const { slowSum } = require('..');

test("should sleep for 5 seconds (9)", async () => {
    const result = await slowSum(0, 17);
    expect(result).toBe(17)
}, 10000)
