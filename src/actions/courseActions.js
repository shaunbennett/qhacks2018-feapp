// called when a course is searched normally, from the course page
export const SEARCH_COURSE = 'SEARCH_COURSE';

// called when a course is searched from the landing page
export const SEARCH_COURSE_LANDING_PAGE = 'SEARCH_COURSE_LANDING_PAGE';

export function searchCourse(courseSearchString) {
  return { type: SEARCH_COURSE, courseSearchString };
}

export function searchCourseFromLanding(courseSearchString) {
  return { type: SEARCH_COURSE_LANDING_PAGE, courseSearchString };
}

export function getCourseData(data) {
  return { type: 'GET_COURSE_DATA', payload: data };
}
