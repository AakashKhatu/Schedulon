import json
from structures import Teacher, Subject, College

teachers = []
subjects = []
college = College(r=False)

with open("random_data", 'r') as data:
    t = json.loads(data.read())

college.__dict__ = t['college']

for value in t['teachers']:
    k = Teacher(r=False)
    k.__dict__ = value
    teachers.append(k)

for value in t['subjects']:
    k = Subject(r=False)
    k.__dict__ = value
    subjects.append(k)
