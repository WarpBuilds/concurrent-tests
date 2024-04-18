const { slowSum } = require('..');

test("should sleep for 5 seconds (70)", async () => {
    const result = await slowSum(17, 34);
    expect(result).toBe(51)
}, 10000)
