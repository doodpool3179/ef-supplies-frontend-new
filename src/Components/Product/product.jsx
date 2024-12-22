import React from 'react';

// Component for Kits with Discounted Price
export const Kit = ({ name, price, discountPrice, image, category, onAddToCart }) => {
  return (
    <div className="product">
      <div className="product-content">
        <div className="product-img">
          <img src={image} alt={`${name}`} />
        </div>
        <div className="product-btns">
          <button type="button" className="btn-cart" onClick={onAddToCart}>
            Add to Cart
          </button>
          <a href="/Payment">
            <button type="button" className="btn-buy">Buy Now</button>
          </a>
        </div>
      </div>
      <div className="product-info">
        <div className="product-info-top">
          <h2 className="sm-title">{category}</h2>
        </div>
        <a href="#" className="product-name">{name}</a>
        <p className="product-price">${price}</p>
        <p className="product-price">${discountPrice}</p>
      </div>
    </div>
  );
};

// Component for Regular Products
export const Product = ({ name, price, image, category, onAddToCart }) => {
  return (
    <div className="product">
      <div className="product-content">
        <div className="product-img">
          <img src={image} alt={`${name}`} />
        </div>
        <div className="product-btns">
          <button type="button" className="btn-cart" onClick={onAddToCart}>
            Add to Cart
          </button>
          <a href="/Payment">
            <button type="button" className="btn-buy">Buy Now</button>
          </a>
        </div>
      </div>
      <div className="product-info">
        <div className="product-info-top">
          <h2 className="sm-title">{category}</h2>
        </div>
        <a href="#" className="product-name">{name}</a>
        <p className="general-product-price">${price}</p>
      </div>
    </div>
  );
};