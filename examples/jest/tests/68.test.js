const { slowSum } = require('..');

test("should sleep for 5 seconds (68)", async () => {
    const result = await slowSum(97, 14);
    expect(result).toBe(111)
}, 10000)
