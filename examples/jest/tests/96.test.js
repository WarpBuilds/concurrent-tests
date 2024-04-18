const { sleep, sum } = require('..');

test("should sleep for 5 seconds (96)", async () => {
    await sleep(5000)
    expect(sum(62, 80)).toBe(142)
}, 10000)
