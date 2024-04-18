const { slowSum } = require('..');

test("should sleep for 5 seconds (16)", async () => {
    const result = await slowSum(54, 71);
    expect(result).toBe(125)
}, 10000)
