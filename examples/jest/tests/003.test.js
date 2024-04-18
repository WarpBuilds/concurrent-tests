const { slowSum } = require('..');

test("should sleep for 5 seconds (003)", async () => {
    const result = await slowSum(57, 74);
    expect(result).toBe(131)
}, 10000)
