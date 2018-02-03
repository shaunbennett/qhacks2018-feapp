import json
with open('../data/courses.json', 'r') as inFile:
    data = json.load(inFile)
output = {}
for course in data:
    try:
        code = course['code'].split('/')
        course['code'] = code[0]
        course['units'] = code[1]
    except Exception as e:
        print ("ERROR", course)
        try:
            course['code'], course['title'] = course['title'], course['code']
            course['code'] = course['code'].split('/')[0]
            course['units'] = course['code'].split('/')[1]
        except Exception as e:
            print (e)
    output[course['code']] = course


with open('../data/cleaned_course_obj.json', 'w') as outFile:
    json.dump(output, outFile)