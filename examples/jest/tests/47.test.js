const { slowSum } = require('..');

test("should sleep for 5 seconds (47)", async () => {
    const result = await slowSum(94, 11);
    expect(result).toBe(105)
}, 10000)
