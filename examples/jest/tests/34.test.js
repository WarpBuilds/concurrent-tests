const { slowSum } = require('..');

test("should sleep for 5 seconds (34)", async () => {
    const result = await slowSum(6, 23);
    expect(result).toBe(29)
}, 10000)
