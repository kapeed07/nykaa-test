import React, { Component } from 'react';
import ProductCard from '../ProductCard';
import '../../Style/ProductList.scss';

class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  mapProducts = (product) => (
    <ProductCard
      key={product.id}
      product={product}
    />
  )

  renderEmptyComponent = () => (
    <div>
      There are no products
    </div>
  );

  render() {
    const {
      products,
    } = this.props;
    return (
      <div
        className="flex flex-wrap product-card-container"
      >
        {(products && products.length > 0)
          ? products.map(this.mapProducts)
          : this.renderEmptyComponent()
        }
      </div>
    );
  }
}

export default ProductList;