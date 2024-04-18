const { slowSum } = require('..');

test("should sleep for 5 seconds (88)", async () => {
    const result = await slowSum(69, 86);
    expect(result).toBe(155)
}, 10000)
