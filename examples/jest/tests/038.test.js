const { slowSum } = require('..');

test("should sleep for 5 seconds (038)", async () => {
    const result = await slowSum(94, 43);
    expect(result).toBe(137)
}, 10000)
