import React from 'react';
import Product from '../Product/Product';

function Dashboard (props) {
  const inventoryMap = props.inventory.map(inventoryItem => (
    <Product
      key={inventoryItem.id}
      itemData={inventoryItem}
    />
  ))

  return (
    <div>
      {inventoryMap}
    </div>
  )
}

export default Dashboard
