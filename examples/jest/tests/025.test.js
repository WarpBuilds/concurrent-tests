const { slowSum } = require('..');

test("should sleep for 5 seconds (025)", async () => {
    const result = await slowSum(41, 29);
    expect(result).toBe(70)
}, 10000)
