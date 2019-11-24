import React, { Component } from "react";
import { connect } from "react-redux";
import Chart from "../components/chart";

import _ from "lodash";

class WeatherList extends Component {
  renderWeather(cityData) {
    const name = cityData.city.name;
    const id = cityData.city.id;
    const temps = _.map(
      cityData.list.map(weather => weather.main.temp),
      temp => temp - 273
    );
    const pressures = cityData.list.map(weather => weather.main.pressure);
    const humidities = cityData.list.map(weather => weather.main.humidity);
    // const lon = cityData.city.coord.lon;
    // const lat = cityData.city.coord.lat;

    console.log("data in weather list container /*commented */");
    // console.log(temps);
    // console.log(pressures);
    // console.log(humidities);

    return (
      <tr key={id}>
        <td>{name}</td>

        <td>
          <Chart data={temps} color="orange" units="&#8451;" />
        </td>
        <td>
          <Chart data={pressures} color="green" units="hPa" />
        </td>
        <td>
          <Chart data={humidities} color="black" units="%" />
        </td>
      </tr>
    );
  }

  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (&#8451;)</th>
            <th>Pressure (hPa)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>{this.props.weather.map(this.renderWeather)}</tbody>
      </table>
    );
  }
}

function mapStateToProps({ weather }) {
  return { weather };
}
// function mapStateToProps(state) {
//   return { weather: state.weather };
// }

export default connect(mapStateToProps)(WeatherList);
