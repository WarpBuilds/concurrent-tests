const { slowSum } = require('..');

test("should sleep for 5 seconds (020)", async () => {
    const result = await slowSum(18, 53);
    expect(result).toBe(71)
}, 10000)
