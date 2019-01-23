from random import choices, randint
from string import ascii_lowercase


class Teacher:

    def __init__(self, r=True):
        if r:
            self.name = ''.join(choices(ascii_lowercase, k=10))
            self.timings = [randint(5, 10), randint(12, 17)]
            self.max_hours = randint(10, 40)
            self.subject = ''.join(choices(ascii_lowercase, k=6))


class Subject:

    def __init__(self, r=True):
        if r:
            self.name = ''.join(choices(ascii_lowercase, k=6))
            self.hours = randint(30, 70)


class College:

    def __init__(self, r=True):
        if r:
            self.name = ''.join(choices(ascii_lowercase, k=12))
            self.total_division = randint(5, 9)
            self.college_hours = [randint(5, 10), randint(12, 17)]
            self.num_days = randint(4, 6)
            self.num_weeks = randint(10, 30)
