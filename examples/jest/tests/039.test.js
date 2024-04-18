const { slowSum } = require('..');

test("should sleep for 5 seconds (039)", async () => {
    const result = await slowSum(15, 33);
    expect(result).toBe(48)
}, 10000)
