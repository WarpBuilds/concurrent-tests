from myproject import main
from time import sleep

def test_sum():
    sleep(1)
    assert main.mysum(56, 74) == 130

