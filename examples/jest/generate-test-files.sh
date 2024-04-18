#!/bin/bash
set -euo pipefail

code_gen() {

    local n1=$(echo $RANDOM % 100 | bc)
    local n2=$(echo $RANDOM % 100 | bc)
    local sum=$(echo $n1 + $n2 | bc)

    cat <<EOF
const { sleep, sum } = require('.');

test("should sleep for 5 seconds ($1)", async () => {
    await sleep(5000)
    expect(sum($n1, $n2)).toBe($sum)
}, 10000)
EOF
}

n=$1
for i in $(seq $n); do
    code_gen $i > "sleep-$i.test.js"
done
