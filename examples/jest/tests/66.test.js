const { slowSum } = require('..');

test("should sleep for 5 seconds (66)", async () => {
    const result = await slowSum(44, 61);
    expect(result).toBe(105)
}, 10000)
