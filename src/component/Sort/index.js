import React, { Component } from 'react';

class Sort extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sort: ''
    };
  }

  changeToggle = (event) => {
    const {
      onSort,
    } = this.props;
    const value = event.currentTarget.value;
    this.setState({
      sort: value,
    }, () => {
      onSort(value);
    });
  }

  render() {
    const sortElem = ['Highest Price', 'Lowest Price'];
    const {
      sort,
    } = this.state;
    return (
      <div>
        {sortElem.map(elem => (
          <div
            key={elem}
            className="flex"
          >
            <input
              checked={sort === elem}
              onChange={this.changeToggle}
              type="radio"
              value={elem}
            />
            <div>
              {elem}
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default Sort;