import React from "react";
import { Link } from "react-router-dom";
import pylonDam from "../../resources/img/paylon_structure_dam.png";
import reduxImg from "../../resources/img/Redux.png";
import firebaseImg from "../../resources/img/firebase_image.svg";
import bootstrapImg from "../../resources/img/bootstrap-stack.png";

class HomePage extends React.Component {
  render() {
    let divStyle = {
      display: "flex",
      height: "30%",
      width: "100%"
    };
    let plusdivStyle = {
      paddingTop: "7%",
      paddingLeft: "4%",
      width: "50%"
    };
    let color = {
      backgroundColor: "#4CE29D"
    };
    return (
      <div className="app">
        <div className="container-fluid">
          <h1>WELCOME TO PANKH INDUSTRIES</h1>
          <div className="row">
            <h3>Product Portfolio</h3>
          </div>
          <div className="row row-lg-12">
            <div className="col col-lg-6 feature">
              <div className="card">
                <div className="card-body">
                  <div className="">
                    <img
                      className="img-thumbnail"
                      src={pylonDam}
                      height="200px"
                      width="200px"
                    />
                  </div>

                  <h4>Pylon Structure for Dam</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;
