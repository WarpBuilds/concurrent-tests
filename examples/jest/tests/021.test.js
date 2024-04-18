const { slowSum } = require('..');

test("should sleep for 5 seconds (021)", async () => {
    const result = await slowSum(0, 56);
    expect(result).toBe(56)
}, 10000)
