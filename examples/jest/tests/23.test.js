const { slowSum } = require('..');

test("should sleep for 5 seconds (23)", async () => {
    const result = await slowSum(8, 25);
    expect(result).toBe(33)
}, 10000)
