import React, { useContext } from 'react';
import AppContext from '../context/AppContex';
import Map from '../components/Map';
import useGoogleAddress from '../hooks/useGoogleAddress';
import '../styles/components/Success.css';

function Success() {
  const { state } = useContext(AppContext);
  const { buyer } = state;
  const location = useGoogleAddress(buyer[0].address);
  console.log(buyer[0].name);
  return (
    <section className="Success">
      <article className="Success-content">
        <h2>{`${buyer.name}, Gracias por tu compra`}</h2>
        <span>Tu pedido llegara en 3 dias</span>
        <section className="Success-map">
          <Map data={location} />
        </section>
      </article>
    </section>
  );
}

export default Success;
