const { slowSum } = require('..');

test("should sleep for 5 seconds (032)", async () => {
    const result = await slowSum(74, 91);
    expect(result).toBe(165)
}, 10000)
