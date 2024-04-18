const { sleep, sum } = require('..');

test("should sleep for 5 seconds (77)", async () => {
    await sleep(5000)
    expect(sum(1, 19)).toBe(20)
}, 10000)
