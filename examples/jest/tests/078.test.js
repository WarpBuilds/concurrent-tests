const { slowSum } = require('..');

test("should sleep for 5 seconds (078)", async () => {
    const result = await slowSum(96, 13);
    expect(result).toBe(109)
}, 10000)
