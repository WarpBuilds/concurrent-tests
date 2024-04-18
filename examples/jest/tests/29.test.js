const { slowSum } = require('..');

test("should sleep for 5 seconds (29)", async () => {
    const result = await slowSum(72, 89);
    expect(result).toBe(161)
}, 10000)
