#!/bin/bash
set -euo pipefail

code_gen() {

    local n1=$(echo $RANDOM % 100 | bc)
    local n2=$(echo $RANDOM % 100 | bc)
    local sum=$(echo $n1 + $n2 | bc)

    cat <<EOF
const { slowSum } = require('..');

test("should sleep for 5 seconds ($1)", async () => {
    const result = await slowSum($n1, $n2);
    expect(result).toBe($sum)
}, 10000)
EOF
}

n=$1
rm -f tests/*.test.js

for i in $(seq -f "%03g" $n); do
    code_gen $i > "tests/$i.test.js"
done
