const { slowSum } = require('..');

test("should sleep for 5 seconds (058)", async () => {
    const result = await slowSum(63, 80);
    expect(result).toBe(143)
}, 10000)
