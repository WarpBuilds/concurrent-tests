const { sleep, sum } = require('..');

test("should sleep for 5 seconds (45)", async () => {
    await sleep(5000)
    expect(sum(84, 33)).toBe(117)
}, 10000)
