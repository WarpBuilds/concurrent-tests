const { slowSum } = require('..');

test("should sleep for 5 seconds (086)", async () => {
    const result = await slowSum(25, 42);
    expect(result).toBe(67)
}, 10000)
