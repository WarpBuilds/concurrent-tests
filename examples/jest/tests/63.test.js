const { sleep, sum } = require('..');

test("should sleep for 5 seconds (63)", async () => {
    await sleep(5000)
    expect(sum(93, 11)).toBe(104)
}, 10000)
