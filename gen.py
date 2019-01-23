from json import dump
from structures import Teacher, Subject, College

college = College().__dict__
n = int(input('enter no. of subjects '))
subjects = []
teachers = []

for i in range(n):
    subjects.append(Subject().__dict__)
    teachers.append(Teacher().__dict__)

with open("random_data", 'w') as random_data:
    dump({
        'college': college,
        'subjects': subjects,
        'teachers': teachers},
            random_data, indent=4)
