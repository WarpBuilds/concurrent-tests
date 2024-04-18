const { slowSum } = require('..');

test("should sleep for 5 seconds (023)", async () => {
    const result = await slowSum(33, 59);
    expect(result).toBe(92)
}, 10000)
