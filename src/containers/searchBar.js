import React, { Component } from 'react';

export default class SearchBar extends Component {
  constructor(props) {
    super(props)
    this.state = { term: ''}
  }

  onInputChange(event){
    console.log(event.target.value)
  }

  render() {
    return (
      <form className="input-group">
        <input
        />
        <span clssName="input-group-btn">
          <button type="submit" className="btn btn-primary">Submit</button>
        </span>
      </form>
    )
  }
}
