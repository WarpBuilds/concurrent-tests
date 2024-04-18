const { slowSum } = require('..');

test("should sleep for 5 seconds (95)", async () => {
    const result = await slowSum(23, 72);
    expect(result).toBe(95)
}, 10000)
