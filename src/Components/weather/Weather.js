import React, { Component } from "react";
import axios from "axios";
import temperature from "../../resources/img/weather.gif";

class Weather extends Component {
  constructor() {
    super();
    this.state = {
      cityName: React.createRef()
    };
    this.getWeatherByCity = this.getWeatherByCity.bind(this);
  }
  getWeatherByCity(event) {
    let CityName = this.cityName.current;

    axios
      .get("https://api.github.com/users/" + CityName)
      .then(function(response) {
        console.log(response);
      });
    // axios.get('https://api.darksky.net/forecast/a7686faa9d6ba6af5076496f58ea7285/37.8267,-122.4233')
    // .then(function (response) {
    //   console.log(response);
    // })
    // .catch(function (error) {
    //   console.log(error);
    // });
    console.log("serching forcast information for " + CityName);
    this.setState({
      cityName: CityName
    });
  }
  render() {
    return (
      <div className="card w-100 " style={{ width: "20rem", border: " none" }}>
        <div className="card-body ">
          <h4 className="card-title ">Weather Forcast</h4>
          <p className="card-text" />
        </div>

        <div className="card  align-self-left " style={{ width: "25rem" }}>
          <div className="card-body">
            <img
              className=" card-title card-img-top "
              src={temperature}
              alt="Card image cap"
              style={{ width: "22.5rem" }}
            />

            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card{"'"}s content.
            </p>
            <div className="col">
              <div className="input-group imput-warning">
                <input
                  type="text"
                  className="form-control bg-warning"
                  placeholder="Search for city..."
                  aria-label="Search for..."
                  ref={this.cityName}
                />
                <span className="input-group-btn">
                  <button
                    className="btn btn-danger"
                    type="button"
                    onClick={this.getWeatherByCity}
                  >
                    Go!
                  </button>
                </span>
              </div>
            </div>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">Cras justo odio</li>
            <li className="list-group-item">Dapibus ac facilisis in</li>
            <li className="list-group-item">Vestibulum at eros</li>
          </ul>
          <div className="card-body bg-danger">
            <a href="#" className="card-link ">
              Card link
            </a>
            <a href="#" className="card-link ">
              Another link
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Weather;
