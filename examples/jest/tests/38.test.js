const { sleep, sum } = require('..');

test("should sleep for 5 seconds (38)", async () => {
    await sleep(5000)
    expect(sum(83, 39)).toBe(122)
}, 10000)
