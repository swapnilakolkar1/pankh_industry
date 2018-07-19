import { bindActionCreators } from "redux";
import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import CourseList from "./courseList";
import * as courseActions from "../../actions/courseActions";

import CourseApi from "../../api/mockCourseApi";

class CoursesPage extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      course: {
        title: "",
        courses: []
      }
    };
    this.onTitleChange = this.onTitleChange.bind(this);
    this.onClickSave = this.onClickSave.bind(this);
  }

  onTitleChange(event) {
    const course = this.state.course;
    course.title = event.target.value;
    this.setState({ course: course });
  }
  onClickSave(event) {
    this.props.actions.createCourse(this.state.course);
    // this.props.dispatch(courseActions.createCourse(this.state.course));
    // alert(`you course name is ${this.state.course.title}`);
  }
  courseRow(course, index) {
    return <div key={index}>{course.title}</div>;
  }
  render() {
    return (
      <div>
        <h1> Courses </h1>
        {this.props.courses.map(this.courseRow)}
        <h2>Add Courses</h2>
        <input
          type="text"
          onChange={this.onTitleChange}
          value={this.state.course.title}
        />
        <input type="button" value="save" onClick={this.onClickSave} />
        <CourseList course={this.props.courses} />
      </div>
    );
  }
}

CoursesPage.propTypes = {
  // dispatch:PropTypes.func.isRequired,
  courses: PropTypes.array,
  actions: PropTypes.object.isRequired
};
function mapStateToProps(state, ownProps) {
  return {
    courses: state.courses
  };
}
function mapDispatchToProps(dispatch) {
  return {
    // createCourse: course =>dispatch(courseActions.createCourse(course))
    actions: bindActionCreators(courseActions, dispatch)
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
