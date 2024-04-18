const { slowSum } = require('..');

test("should sleep for 5 seconds (41)", async () => {
    const result = await slowSum(30, 47);
    expect(result).toBe(77)
}, 10000)
