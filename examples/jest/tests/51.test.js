const { slowSum } = require('..');

test("should sleep for 5 seconds (51)", async () => {
    const result = await slowSum(35, 52);
    expect(result).toBe(87)
}, 10000)
