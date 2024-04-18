const { sleep, sum } = require('..');

test("should sleep for 5 seconds (27)", async () => {
    await sleep(5000)
    expect(sum(81, 68)).toBe(149)
}, 10000)
