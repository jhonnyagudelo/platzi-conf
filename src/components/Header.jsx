import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AppContext from '../context/AppContex';
import '../styles/components/Header.css';

function Header() {
  const { state } = useContext(AppContext);

  const { cart } = state;

  return (
    <section className="Header">
      <h1 className="Header-title">
        <Link to="/">PlatziConf</Link>
      </h1>
      <div className="Header-checkout">
        <Link to="/checkout">
          <i className="fas fa-shopping-basket"></i>
        </Link>
        {cart.length > 0 && <div className="Header-alert">{cart.length}</div>}
      </div>
    </section>
  );
}

export default Header;
