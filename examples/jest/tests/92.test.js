const { sleep, sum } = require('..');

test("should sleep for 5 seconds (92)", async () => {
    await sleep(5000)
    expect(sum(10, 28)).toBe(38)
}, 10000)
