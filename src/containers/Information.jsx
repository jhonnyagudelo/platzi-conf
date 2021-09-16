import React, { useRef, useContext } from 'react';
import { Link } from 'react-router-dom';
import '../styles/components/Information.css';
import { useRef } from 'react';
import AppContext from '../context/AppContex';

function Information() {
  const { state, addToBuyer } = useContext(AppContext);
  const form = useRef(null);
  const { cart } = state;

  handleSubmit = () => {
    const fromData = new fromData(form.current);
    const buyer = {
      name: formData.get('name'),
      email: formData.get('email'),
      address: formData.get('address'),
      apto: formData.get('apto'),
      country: formData.get('country'),
      state: formData.get('state'),
      city: formData.get('city'),
      phone: formData.get('phone'),
    };
  };

  return (
    <section className="Information">
      <article className="Information-content">
        <input type="text" />
        <h2>Informacion de contacto:</h2>
        <section className="Informacion-form">
          <form ref={form}>
            <input type="text" placeholder="Nombre completo" name="name" />
            <input type="text" placeholder="Correo Electornico" name="email" />
            <input type="text" placeholder="Direccion" name="address" />
            <input type="text" placeholder="Apto" name="apto" />
            <input type="text" placeholder="Pais" name="country" />
            <input type="text" placeholder="Estado" name="state" />
            <input type="text" placeholder="Ciudad" name="city" />
            <input type="text" placeholder="Telefono" name="phone" />
          </form>
          <section className="Information-buttons">
            <div className="Information-back">
              <Link to="/checkout">Regresar</Link>
            </div>
            <div className="Information-next">
              <button type="button">Pagar</button>
            </div>
          </section>
        </section>
      </article>
      <section className="Information-siebar">
        <h3>pedido:</h3>
        {cart.map((item) => (
          <article className="Information-item" key={item.title}>
            <div className="Information-element">
              <h4>{item.title}</h4>
              <span>$ {item.price}</span>
            </div>
          </article>
        ))}
      </section>
    </section>
  );
}

export default Information;
