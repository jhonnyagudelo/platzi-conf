import React from 'react';
import '../styles/components/Payment.css';
function Payment() {
  return (
    <section className="Payment">
      <article className="Payment-content">
        <h3>Resumen del pedido</h3>
        <div className="Payment-button">Boton de pago con Paypal</div>
      </article>
    </section>
  );
}

export { Payment };
