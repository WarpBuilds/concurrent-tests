const { slowSum } = require('..');

test("should sleep for 5 seconds (42)", async () => {
    const result = await slowSum(90, 7);
    expect(result).toBe(97)
}, 10000)
