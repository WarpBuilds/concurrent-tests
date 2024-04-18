const { slowSum } = require('..');

test("should sleep for 5 seconds (092)", async () => {
    const result = await slowSum(63, 81);
    expect(result).toBe(144)
}, 10000)
