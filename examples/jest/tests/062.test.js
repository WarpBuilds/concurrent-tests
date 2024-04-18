const { slowSum } = require('..');

test("should sleep for 5 seconds (062)", async () => {
    const result = await slowSum(19, 36);
    expect(result).toBe(55)
}, 10000)
