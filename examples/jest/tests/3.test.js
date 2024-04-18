const { sleep, sum } = require('..');

test("should sleep for 5 seconds (3)", async () => {
    await sleep(5000)
    expect(sum(42, 60)).toBe(102)
}, 10000)
