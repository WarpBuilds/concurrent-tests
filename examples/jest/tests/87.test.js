const { sleep, sum } = require('..');

test("should sleep for 5 seconds (87)", async () => {
    await sleep(5000)
    expect(sum(77, 94)).toBe(171)
}, 10000)
