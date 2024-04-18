const { slowSum } = require('..');

test("should sleep for 5 seconds (068)", async () => {
    const result = await slowSum(25, 43);
    expect(result).toBe(68)
}, 10000)
