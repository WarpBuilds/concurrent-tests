const { sleep, sum } = require('..');

test("should sleep for 5 seconds (66)", async () => {
    await sleep(5000)
    expect(sum(74, 91)).toBe(165)
}, 10000)
