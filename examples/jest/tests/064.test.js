const { slowSum } = require('..');

test("should sleep for 5 seconds (064)", async () => {
    const result = await slowSum(31, 48);
    expect(result).toBe(79)
}, 10000)
