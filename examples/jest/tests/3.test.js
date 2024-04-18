const { slowSum } = require('..');

test("should sleep for 5 seconds (3)", async () => {
    const result = await slowSum(6, 24);
    expect(result).toBe(30)
}, 10000)
