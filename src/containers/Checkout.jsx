import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AppContext from '../context/AppContex';
import '../styles/components/Checkout.css';

function Checkout() {
  const { state, removeFromCart } = useContext(AppContext);
  const { cart } = state;

  const handleRemove = (product) => () => {
    removeFromCart(product);
  };

  const handSumTotal = () => {
    const reducer = (accumalator, currentValue) =>
      accumalator + currentValue.price;
    const sum = cart.reduce(reducer, 0);
    return sum;
  };

  return (
    <section className="Checkout">
      <article className="Checkout-content">
        <h3>
          {cart.length > 0 ? (
            <h3>Lista de pedidos</h3>
          ) : (
            <h3>Sin pedidos....</h3>
          )}
        </h3>
        {cart.map((item) => (
          <div className="Checkout-item">
            <div className="Checkout-element">
              <h4>{item.title}</h4>
              <span>${item.price}</span>
            </div>

            <button type="button" onClick={handleRemove(item)}>
              <i className="fas fa-trash-alt"></i>
            </button>
          </div>
        ))}
      </article>
      {cart.length > 0 && (
        <article className="Checkout-sidebar">
          <h3>{`Precio total: $ ${handSumTotal()}`}</h3>
          <Link to="/checkout/information">
            <button type="button">Contunuar pedido</button>
          </Link>
        </article>
      )}
    </section>
  );
}

export default Checkout;
