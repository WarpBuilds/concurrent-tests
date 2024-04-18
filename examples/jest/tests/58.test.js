const { slowSum } = require('..');

test("should sleep for 5 seconds (58)", async () => {
    const result = await slowSum(59, 77);
    expect(result).toBe(136)
}, 10000)
