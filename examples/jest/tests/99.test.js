const { sleep, sum } = require('..');

test("should sleep for 5 seconds (99)", async () => {
    await sleep(5000)
    expect(sum(43, 61)).toBe(104)
}, 10000)
