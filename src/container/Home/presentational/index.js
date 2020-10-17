import React, { Component } from 'react';
import {
  ProductList,
  Filters,
  Search,
  Sort,
} from '../../../component';
import '../../../Style/Home.scss';


class Home extends Component {

  componentDidMount() {
    const {
      fetchMockData,
    } = this.props;
    fetchMockData();
  }

  onSearch = (text) => {
    const {
      searchProducts,
    } = this.props;
    searchProducts({
      searchTerm: text,
    });
  }

  onSort = (sort) => {
    const {
      sortProducts,
    } = this.props;
    sortProducts({
      sort,
    });
  }

  render() {
    const {
      products,
    } = this.props;
    return (
      <div
        className="flex justify-center"
      >
        <div
          className="product-listing-container"
        >
          <Search
            searchResults={this.onSearch}
          />
          <div
            className="flex"
          >
            <div>
              <Filters />
              <Sort
                onSort={this.onSort}
              />
            </div>
            <ProductList
              products={products}
            />
          </div>
        </div>
      </div >
    );
  }
}

export default Home;