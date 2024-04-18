const { slowSum } = require('..');

test("should sleep for 5 seconds (8)", async () => {
    const result = await slowSum(8, 57);
    expect(result).toBe(65)
}, 10000)
