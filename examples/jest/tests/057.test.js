const { slowSum } = require('..');

test("should sleep for 5 seconds (057)", async () => {
    const result = await slowSum(41, 58);
    expect(result).toBe(99)
}, 10000)
