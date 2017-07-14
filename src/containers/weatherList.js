import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Sparklines, SparklinesLine } from 'react-sparklines';

class WeatherList extends Component {
  renderWeather(cityData) {
    const name = cityData.city.name
    const temps = cityData.list.map(weather => weather.main.temp)
    const pressure = cityData.list.map(weather => weather.main.pressure)
    const humidity = cityData.list.map(weather => weather.main.humidity)
    console.log(temps)
    return (
      <tr key={name}>
        <td>{name}</td>
        <td>
          <Sparklines data={temps}>
            <SparklinesLine color="red " />
          </Sparklines>
        </td>
        <td>
          <Sparklines data={pressure}>
            <SparklinesLine color="red " />
          </Sparklines>
        </td>
        <td>
          <Sparklines data={humidity}>
            <SparklinesLine color="red " />
          </Sparklines>
        </td>
      </tr>
    )
  }

  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature</th>
            <th>Pressure</th>
            <th>Humidity</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    )
  }
}


function mapStateToProps({ weather }) {
  //({ weather }) === (state)  var weather = state.weather
  return { weather } // { weather } === { weather: weather } ES6 syntax
}

export default connect(mapStateToProps)(WeatherList);
