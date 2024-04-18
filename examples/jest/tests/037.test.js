const { slowSum } = require('..');

test("should sleep for 5 seconds (037)", async () => {
    const result = await slowSum(95, 12);
    expect(result).toBe(107)
}, 10000)
