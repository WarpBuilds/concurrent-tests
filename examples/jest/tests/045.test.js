const { slowSum } = require('..');

test("should sleep for 5 seconds (045)", async () => {
    const result = await slowSum(92, 9);
    expect(result).toBe(101)
}, 10000)
