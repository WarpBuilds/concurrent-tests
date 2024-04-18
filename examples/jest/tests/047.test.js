const { slowSum } = require('..');

test("should sleep for 5 seconds (047)", async () => {
    const result = await slowSum(74, 0);
    expect(result).toBe(74)
}, 10000)
