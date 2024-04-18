const { slowSum } = require('..');

test("should sleep for 5 seconds (005)", async () => {
    const result = await slowSum(1, 18);
    expect(result).toBe(19)
}, 10000)
