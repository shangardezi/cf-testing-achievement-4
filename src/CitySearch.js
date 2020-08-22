import React, { Component } from 'react';
import { extractLocations } from './api';
import { mockData } from './mock-data';

class CitySearch extends Component {
  state = {
    locations: extractLocations(mockData),
    query:'',
    suggestions:[]
  }

  handleInputChange = (event) => {
    const value = event.target.value;
    this.setState({ query: value });
  }

  handleItemClicked = (value) => {
    this.setState({ query: value });
  }


  render() {
    console.log(this.state.suggestions)
    return (
      <div className="CitySearch">
        <input type="text" className="city" value={this.state.query} onChange={this.handleInputChange} />
          <ul className="suggestions">
            {this.state.suggestions.map((suggestion) => (
              <li onClick={() => this.handleItemClicked(suggestion)}key={suggestion}>{suggestion} </li>
            ))}
          </ul>
      </div>
    );
  }
}

export default CitySearch;
