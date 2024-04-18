const { sleep, sum } = require('..');

test("should sleep for 5 seconds (22)", async () => {
    await sleep(5000)
    expect(sum(44, 61)).toBe(105)
}, 10000)
