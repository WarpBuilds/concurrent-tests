const { sleep, sum } = require('..');

test("should sleep for 5 seconds (33)", async () => {
    await sleep(5000)
    expect(sum(62, 79)).toBe(141)
}, 10000)
