import React from "react";
import PropTypes from "prop-types";
import CourseListRow from "./CourseListRow";
import orderBy from "../../../node_modules/lodash/orderBy";
/* const CourseList=({courses})=>{
    return (
        <table className ="table ">
        <thead>
        <tr>
        <th>&nbsp;</th>
        <th>Title  <i className="fa fa-sort-amount-asc" aria-hidden="true"></i></th>
        <th>Authore</th>
        <th>Category</th>
        <th>Length</th>
        </tr>
        </thead>
        <tbody>
        {
            orderBy(courses, ['Title'], ['asc'])
        .map(course =>{
                
                <CourseListRow key={course.id} course={course} />
             } )
        }
        </tbody>
        </table>
        
    );
};
*/
class CourseList extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = { order: true };
    this.sortByName = this.sortByName.bind(this);
  }
  sortByName(event) {
    this.setState(prevState => ({
      order: !prevState.order
    }));
  }
  render() {
    let { courses } = this.props;
    let orderby = this.state.order ? "asc" : "desc";
    courses = orderBy(courses, ["title"], [orderby]);
    let sorticon = (
      <i
        className={`fa fa-sort-amount-${orderby}`}
        aria-hidden="true"
        onClick={this.sortByName}
      />
    );

    return (
      <table className="table  table-hover">
        <thead>
          <tr>
            <th>&nbsp;</th>
            <th>Title {sorticon}</th>
            <th>Authore</th>
            <th>Category</th>
            <th>Length</th>
          </tr>
        </thead>
        <tbody>
          {courses.map(course => (
            <CourseListRow key={course.id} course={course} />
          ))}
        </tbody>
      </table>
    );
  }
}
CourseList.propTypes = {
  courses: PropTypes.array
};

export default CourseList;
