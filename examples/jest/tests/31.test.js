const { slowSum } = require('..');

test("should sleep for 5 seconds (31)", async () => {
    const result = await slowSum(93, 42);
    expect(result).toBe(135)
}, 10000)
