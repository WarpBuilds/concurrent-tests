const { slowSum } = require('..');

test("should sleep for 5 seconds (4)", async () => {
    const result = await slowSum(67, 84);
    expect(result).toBe(151)
}, 10000)
