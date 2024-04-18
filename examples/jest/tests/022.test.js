const { slowSum } = require('..');

test("should sleep for 5 seconds (022)", async () => {
    const result = await slowSum(21, 81);
    expect(result).toBe(102)
}, 10000)
