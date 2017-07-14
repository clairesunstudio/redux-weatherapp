import React, { Component } from 'react'

export default class GoogleMap extends Component {
  componentDidMount() {
    new google.maps.Map(this.refs.map, {
      //this.refs.map reference to the html element in the render function of this component and render 3rd party non react app knows where to render its instance
      zoom:12,
      center: {
        lat: this.props.lat,
        lng: this.props.lon
      }
    })
  }
  render() {
    return(
      <div ref="map" /> //ref system in react: creates a direct reference to this html element  this.ref.map
    )
  }
}
