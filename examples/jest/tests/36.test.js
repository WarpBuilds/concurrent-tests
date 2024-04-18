const { slowSum } = require('..');

test("should sleep for 5 seconds (36)", async () => {
    const result = await slowSum(26, 43);
    expect(result).toBe(69)
}, 10000)
