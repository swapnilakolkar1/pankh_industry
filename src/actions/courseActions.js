import * as ActionTypes from "../actionConstants/actionTypes";

export function createCourse(courses) {
  return { type: ActionTypes.CREATE_COURSE, courses };
}
