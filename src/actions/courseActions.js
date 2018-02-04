export const SEARCH_COURSE = 'SEARCH_COURSE';

export function searchCourse(courseSearchString) {
  return { type: SEARCH_COURSE, courseSearchString };
}
