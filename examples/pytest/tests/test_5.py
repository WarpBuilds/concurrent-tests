from myproject import main
from time import sleep

def test_sum():
    sleep(1)
    assert main.mysum(47, 65) == 112

