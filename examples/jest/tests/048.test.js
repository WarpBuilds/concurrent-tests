const { slowSum } = require('..');

test("should sleep for 5 seconds (048)", async () => {
    const result = await slowSum(43, 31);
    expect(result).toBe(74)
}, 10000)
