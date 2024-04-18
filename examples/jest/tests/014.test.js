const { slowSum } = require('..');

test("should sleep for 5 seconds (014)", async () => {
    const result = await slowSum(2, 20);
    expect(result).toBe(22)
}, 10000)
