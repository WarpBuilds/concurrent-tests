const { slowSum } = require('..');

test("should sleep for 5 seconds (091)", async () => {
    const result = await slowSum(41, 59);
    expect(result).toBe(100)
}, 10000)
