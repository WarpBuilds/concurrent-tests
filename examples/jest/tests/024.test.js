const { slowSum } = require('..');

test("should sleep for 5 seconds (024)", async () => {
    const result = await slowSum(42, 60);
    expect(result).toBe(102)
}, 10000)
