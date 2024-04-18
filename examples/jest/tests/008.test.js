const { slowSum } = require('..');

test("should sleep for 5 seconds (008)", async () => {
    const result = await slowSum(34, 52);
    expect(result).toBe(86)
}, 10000)
