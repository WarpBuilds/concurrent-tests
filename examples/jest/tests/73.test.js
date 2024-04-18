const { sleep, sum } = require('..');

test("should sleep for 5 seconds (73)", async () => {
    await sleep(5000)
    expect(sum(28, 77)).toBe(105)
}, 10000)
