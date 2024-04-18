const { slowSum } = require('..');

test("should sleep for 5 seconds (92)", async () => {
    const result = await slowSum(42, 59);
    expect(result).toBe(101)
}, 10000)
