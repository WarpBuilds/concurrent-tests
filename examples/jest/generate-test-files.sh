#!/bin/bash
set -euo pipefail

code_gen() {

    local n1=$(echo $RANDOM % 100 | bc)
    local n2=$(echo $RANDOM % 100 | bc)
    local sum=$(echo $n1 + $n2 | bc)

    cat <<EOF
const { sleep, sum } = require('..');

test("should sleep for 5 seconds ($1)", async () => {
    await sleep(5000)
    expect(sum($n1, $n2)).toBe($sum)
}, 10000)
EOF
}

n=$1
for i in $(seq $n); do
    test_file_name="tests/$i.test.js"
    rm -f $test_file_name

    code_gen $i > $test_file_name
done
