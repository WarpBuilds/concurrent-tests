const { slowSum } = require('..');

test("should sleep for 5 seconds (067)", async () => {
    const result = await slowSum(65, 21);
    expect(result).toBe(86)
}, 10000)
