import React, { Component } from "react";
import { connect } from "react-redux";

import Chart from "../../components/Chart";

class WeatherList extends Component {
  renderWeather(cityData) {
    const cityName = cityData.city.name;
    const temp = cityData.list.map(weather => weather.main.temp);
    const humidities = cityData.list.map(humidity => humidity.main.humidity);
    const pressures = cityData.list.map(pressure => pressure.main.pressure);

    return (
      <tr key={cityName}>
        <td>{cityName}</td>
        <td>
          <Chart data={temp} color="red" units="K" />
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
            <th>Temperature (K)</th>
            <th>Pressure (hPa)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>

        <tbody>{this.props.weather.map(this.renderWeather)}</tbody>
      </table>
    );
  }
}

const mapStateToProps = state => {
  return {
    weather: state.weather
  };
};

export default connect(mapStateToProps)(WeatherList);
