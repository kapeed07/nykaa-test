import React, { Component } from 'react';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {  
      
    };
  }

  onChange = (event) => {
    const {
      searchResults,
    } = this.props;
    if (searchResults) {
      searchResults(event.target.value);
    }
  }


  render() {
    return (
      <div>
        <input
          onChange={this.onChange}
          type="text"
        />
      </div>
    );
  }
}

export default Search;