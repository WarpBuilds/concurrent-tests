#!/bin/bash
set -euo pipefail

code_gen() {

    local n1=$(echo $RANDOM % 100 | bc)
    local n2=$(echo $RANDOM % 100 | bc)
    local sum=$(echo $n1 + $n2 | bc)

    cat <<EOF
from myproject import myproject

def test_sum():
    assert myproject.slow_sum($n1, $n2) == $sum

EOF
}

n=$1
rm -f tests/test_*.py

for i in $(seq -f "%03g" $n); do
    code_gen $i > "tests/test_$i.py"
done
