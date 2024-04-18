const { slowSum } = require('..');

test("should sleep for 5 seconds (62)", async () => {
    const result = await slowSum(3, 20);
    expect(result).toBe(23)
}, 10000)
