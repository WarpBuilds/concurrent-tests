#!/bin/bash
set -euo pipefail

code_gen() {

    local n1=$(echo $RANDOM % 100 | bc)
    local n2=$(echo $RANDOM % 100 | bc)
    local sum=$(echo $n1 + $n2 | bc)

    cat <<EOF
from myproject import main
from time import sleep

def test_sum():
    sleep(1)
    assert main.mysum($n1, $n2) == $sum

EOF
}

n=$1
for i in $(seq $n); do
    test_file_name="tests/test_$i.py"
    rm -f $test_file_name

    code_gen $i > $test_file_name
done
