const { slowSum } = require('..');

test("should sleep for 5 seconds (48)", async () => {
    const result = await slowSum(54, 72);
    expect(result).toBe(126)
}, 10000)
