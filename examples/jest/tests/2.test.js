const { sleep, sum } = require('..');

test("should sleep for 5 seconds (2)", async () => {
    await sleep(5000)
    expect(sum(95, 20)).toBe(115)
}, 10000)
