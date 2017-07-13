import React, { Component } from 'react';

export default class SearchBar extends Component {
  constructor(props) {
    super(props)
    this.state = { term: ''}
    this.onInputChange = this.onInputChange.bind(this);
    //binding the Component as the context of `this` to callback function and set the function to this.onInputChange
  }

  onInputChange(event){
    console.log(event.target.value)
    this.setState({ term: event.target.value})
  }

  render() {
    return (
      <form className="input-group">
        <input
          type="text"
          placeholder="Search for a city to see weather forcast"
          className="form-control"
          value={this.state.term}
          onChange={this.onInputChange}
        />
        <span className="input-group-btn">
          <button type="button" className="btn btn-secondary">Submit</button>
        </span>
      </form>


    )
  }
}
