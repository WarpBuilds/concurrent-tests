#!/bin/bash
set -euo pipefail

n=$1
rm -f test_*.spec.ts

for i in $(seq -f "%03g" $n); do
    cp test.spec.original.ts tests/test_$i.spec.ts
done
