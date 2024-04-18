const { slowSum } = require('..');

test("should sleep for 5 seconds (85)", async () => {
    const result = await slowSum(88, 5);
    expect(result).toBe(93)
}, 10000)
