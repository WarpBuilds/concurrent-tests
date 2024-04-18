const { slowSum } = require('..');

test("should sleep for 5 seconds (83)", async () => {
    const result = await slowSum(35, 53);
    expect(result).toBe(88)
}, 10000)
