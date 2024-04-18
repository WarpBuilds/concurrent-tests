const { slowSum } = require('..');

test("should sleep for 5 seconds (029)", async () => {
    const result = await slowSum(31, 49);
    expect(result).toBe(80)
}, 10000)
