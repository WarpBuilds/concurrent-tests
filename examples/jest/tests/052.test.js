const { slowSum } = require('..');

test("should sleep for 5 seconds (052)", async () => {
    const result = await slowSum(78, 95);
    expect(result).toBe(173)
}, 10000)
