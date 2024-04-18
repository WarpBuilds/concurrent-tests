const { slowSum } = require('..');

test("should sleep for 5 seconds (72)", async () => {
    const result = await slowSum(38, 87);
    expect(result).toBe(125)
}, 10000)
