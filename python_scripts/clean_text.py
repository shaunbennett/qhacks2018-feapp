import re
with open ('../data/courses_of_instruction.txt', 'r') as inFile:
    lines = inFile.readlines()
    stripped_lines = map(lambda x: x.strip(), lines)
    text = '\n'.join(stripped_lines)
    text = text.replace(u"\u00A0", " ")
    text = text.replace(u"\u2010", "-")
    courses = text.split('\n\n')
    print ("NUM COURSES", len(courses))

with open('../data/courses_cleaned.txt', 'w') as outFile:
    outFile.write(text)