const { slowSum } = require('..');

test("should sleep for 5 seconds (87)", async () => {
    const result = await slowSum(8, 26);
    expect(result).toBe(34)
}, 10000)
