const { slowSum } = require('..');

test("should sleep for 5 seconds (27)", async () => {
    const result = await slowSum(52, 69);
    expect(result).toBe(121)
}, 10000)
