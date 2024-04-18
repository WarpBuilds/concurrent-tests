const { slowSum } = require('..');

test("should sleep for 5 seconds (81)", async () => {
    const result = await slowSum(44, 62);
    expect(result).toBe(106)
}, 10000)
