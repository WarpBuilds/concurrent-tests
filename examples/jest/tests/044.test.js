const { slowSum } = require('..');

test("should sleep for 5 seconds (044)", async () => {
    const result = await slowSum(2, 19);
    expect(result).toBe(21)
}, 10000)
