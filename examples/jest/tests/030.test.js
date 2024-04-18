const { slowSum } = require('..');

test("should sleep for 5 seconds (030)", async () => {
    const result = await slowSum(53, 71);
    expect(result).toBe(124)
}, 10000)
