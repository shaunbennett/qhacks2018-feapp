import json
import re
with open('../data/courses_cleaned.txt') as inFile:
    text = inFile.read()
    courses = text.split('\n\n')
    print ("NUM COURSES", len(courses))

outputArray = []

for course in courses:
    try:
        lines = course.split('\n')
        if (len(lines) < 2):
            print (lines)
            continue
        courseDict = {}
        courseDict['code'] = lines[0]
        courseDict['title'] = lines[1]
        data = '\n'.join(lines[2:]) + 'THEEND'
        # print (data)
        # courseDict['data'] = data
        split_words = ['NOTE', 'LEARNING HOURS', 'EXCLUSION', 'ONE-WAY EXCLUSION', "RECOMMENDATION", "PREREQUISITE"]
        match_all_words = '|'.join(split_words) + '|THEEND'
        match_desc = re.compile('([^~]*?)({})'.format(match_all_words), re.MULTILINE)
        courseDict['description'] = match_desc.match(data).group(1)
        for word in split_words:
            regex_str = '^' + word + '    ([^~]*?)({})'.format(match_all_words)
            match_useful_text = re.compile(regex_str, re.MULTILINE)
            courseDict[word] = [data[m.start(1): m.end(1)] for m in match_useful_text.finditer(data)]
        outputArray.append(courseDict)

    except Exception as e:
        print (e)



with open('../data/courses.json', 'w') as outFile:
    json.dump(outputArray, outFile)