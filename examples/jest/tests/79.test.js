const { sleep, sum } = require('..');

test("should sleep for 5 seconds (79)", async () => {
    await sleep(5000)
    expect(sum(54, 71)).toBe(125)
}, 10000)
