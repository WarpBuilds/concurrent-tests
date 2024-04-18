const { slowSum } = require('..');

test("should sleep for 5 seconds (13)", async () => {
    const result = await slowSum(41, 90);
    expect(result).toBe(131)
}, 10000)
