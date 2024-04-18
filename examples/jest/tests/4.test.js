const { sleep, sum } = require('..');

test("should sleep for 5 seconds (4)", async () => {
    await sleep(5000)
    expect(sum(3, 20)).toBe(23)
}, 10000)
