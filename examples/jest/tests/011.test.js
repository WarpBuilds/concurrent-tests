const { slowSum } = require('..');

test("should sleep for 5 seconds (011)", async () => {
    const result = await slowSum(68, 86);
    expect(result).toBe(154)
}, 10000)
