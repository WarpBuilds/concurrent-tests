const { slowSum } = require('..');

test("should sleep for 5 seconds (075)", async () => {
    const result = await slowSum(24, 41);
    expect(result).toBe(65)
}, 10000)
