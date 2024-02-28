import React from 'react';

function Cart({ showCart, putharekulu }) {
  return (
    <div className={`cart ${showCart ? 'show' : ''}`}>
      <h2>Shopping Cart</h2>
      <ul>
        {putharekulu.map(item => (
          <li key={item.id}>
            <img src={process.env.PUBLIC_URL + item.image} alt={item.name} />
            <div>
              <h3>{item.name}</h3>
              <p>{item.price}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Cart;

