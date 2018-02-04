export const SEARCH_COURSE = 'SEARCH_COURSE';

export function searchCourse(courseSearchString) {
  return { type: SEARCH_COURSE, courseSearchString };
}

export function getCourseData(data) {
  return { type: 'GET_COURSE_DATA', payload: data };
}
