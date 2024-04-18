const { slowSum } = require('..');

test("should sleep for 5 seconds (91)", async () => {
    const result = await slowSum(82, 99);
    expect(result).toBe(181)
}, 10000)
