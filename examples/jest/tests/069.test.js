const { slowSum } = require('..');

test("should sleep for 5 seconds (069)", async () => {
    const result = await slowSum(47, 64);
    expect(result).toBe(111)
}, 10000)
