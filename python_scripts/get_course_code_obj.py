import json
with open('../data/cleaned_course_obj.json', 'r') as inFile:
    courses = json.load(inFile)

for course in courses:
    courses[course] = None

with open('../data/empty_course_obj.json', 'w') as outFile:
    json.dump(courses, outFile)