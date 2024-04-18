const { slowSum } = require('..');

test("should sleep for 5 seconds (036)", async () => {
    const result = await slowSum(47, 35);
    expect(result).toBe(82)
}, 10000)
