const { slowSum } = require('..');

test("should sleep for 5 seconds (013)", async () => {
    const result = await slowSum(80, 98);
    expect(result).toBe(178)
}, 10000)
