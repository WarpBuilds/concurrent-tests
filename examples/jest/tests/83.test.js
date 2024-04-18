const { sleep, sum } = require('..');

test("should sleep for 5 seconds (83)", async () => {
    await sleep(5000)
    expect(sum(65, 83)).toBe(148)
}, 10000)
