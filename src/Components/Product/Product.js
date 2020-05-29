import React from 'react';

function Product (props) {
  return (
    <div className="site-product">
      <img className="product-image" src={props.itemData.img} alt={props.itemData.img} />
      <p>Name: {props.itemData.name}</p>
      <p>Price: {props.itemData.price}</p>
    </div>
  )
}

export default Product
