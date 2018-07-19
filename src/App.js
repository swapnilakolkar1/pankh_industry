import React from "react";
import HomePage from "./Components/Home/HomePage";
import Header from "./Components/common/Header";
import AboutUs from "./Components/About/aboutUs";
import CoursesPage from "./Components/courses/CoursesPage";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
class App extends React.Component {
  constructor(props, match) {
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount() {
    // this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    //  clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    debugger;
    let textBlue = {
      color: "blue"
    };
    let time = this.state.date;

    return (
      <Router>
        <div>
          <Header date={time} />

          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/courses" component={CoursesPage} />
            <Route path="/aboutus" component={AboutUs} />
          </Switch>
        </div>
      </Router>
    );
  }
}
export default App;

/* var data=document.getElementsByTagName("table")[2];
var finaldata=[];
for(var i=0;i<data.rows.length;i++){

var row={
Market:data.rows[i].cells["0"].innerText,
Arrival_Date:data.rows[i].cells["1"].innerText,
Arrivals_Tonnes:data.rows[i].cells["2"].innerText,
Variety:data.rows[i].cells["3"].innerText,
Minimum_Price:data.rows[i].cells["4"].innerText,
Maximum_Price:data.rows[i].cells["5"].innerText,
Modal_Price:data.rows[i].cells["6"].innerText
}
finaldata.push(row);

}
console.table(finaldata)
 */

// ReactDOM.render(<App />, document.getElementById("app"));
