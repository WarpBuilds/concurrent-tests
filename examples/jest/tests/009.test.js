const { slowSum } = require('..');

test("should sleep for 5 seconds (009)", async () => {
    const result = await slowSum(56, 74);
    expect(result).toBe(130)
}, 10000)
