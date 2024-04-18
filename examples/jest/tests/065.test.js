const { slowSum } = require('..');

test("should sleep for 5 seconds (065)", async () => {
    const result = await slowSum(53, 70);
    expect(result).toBe(123)
}, 10000)
