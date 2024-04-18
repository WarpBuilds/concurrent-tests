const { slowSum } = require('..');

test("should sleep for 5 seconds (015)", async () => {
    const result = await slowSum(24, 42);
    expect(result).toBe(66)
}, 10000)
