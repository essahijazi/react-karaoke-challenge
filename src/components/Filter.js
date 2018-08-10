import React, { Component } from 'react';

class Filter extends Component {
  // constructor(props) {
  //   super(props)
  //   this.state ={
  //     inputValue: ''
  //   }
  // }




  render() {
    return (
      <div className="filter">
        <label htmlFor="title-filter">Title: </label>
        <input onChange={(event) => this.props.filterSongs(event.target.value)} id="title-filter" type="text" />
      </div>
    );
  }
}

export default Filter;
