const { slowSum } = require('..');

test("should sleep for 5 seconds (034)", async () => {
    const result = await slowSum(56, 73);
    expect(result).toBe(129)
}, 10000)
