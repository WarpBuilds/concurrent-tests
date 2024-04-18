const { slowSum } = require('..');

test("should sleep for 5 seconds (072)", async () => {
    const result = await slowSum(20, 37);
    expect(result).toBe(57)
}, 10000)
