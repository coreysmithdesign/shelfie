import React from 'react';

function Product (props) {
  return (
    <div>
      <p>{props.itemData.img}</p>
      <p>{props.itemData.name}</p>
      <p>{props.itemData.price}</p>
    </div>
  )
}

export default Product
