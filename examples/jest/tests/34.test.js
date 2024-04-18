const { sleep, sum } = require('..');

test("should sleep for 5 seconds (34)", async () => {
    await sleep(5000)
    expect(sum(93, 48)).toBe(141)
}, 10000)
