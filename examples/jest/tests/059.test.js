const { slowSum } = require('..');

test("should sleep for 5 seconds (059)", async () => {
    const result = await slowSum(53, 2);
    expect(result).toBe(55)
}, 10000)
