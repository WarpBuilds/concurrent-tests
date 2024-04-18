const { slowSum } = require('..');

test("should sleep for 5 seconds (085)", async () => {
    const result = await slowSum(3, 20);
    expect(result).toBe(23)
}, 10000)
