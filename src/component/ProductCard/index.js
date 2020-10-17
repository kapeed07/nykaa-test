import React, { Component } from 'react';
import '../../Style/ProductCard.scss';

class ProductCard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const {
      product,
    } = this.props;
    return (
      <div
        className="product-card margin-s bdr-rds pdng-s"
      >
        <img
          className="product-card-img"
          src="https://images-static.nykaa.com/media/catalog/product/tr:w-276,h-276,cm-pad_resize/m/a/maybelline_vehcm.jpg"
          alt=""
        />
        <div>
          <div>
            <span>{product.name}</span>
          </div>
          <div>
            <span>Rating: {product.ratingCount}</span>
          </div>
          <div>
            <span>Price: {product.offerPrice}</span>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductCard;