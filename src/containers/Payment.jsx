import React, { useContext } from 'react';
import { PayPalButton } from 'react-paypal-button-v2';
import { useHistory } from 'react-router-dom';
import AppContext from '../context/AppContex';
import { handSumTotal } from '../utils';
import '../styles/components/Payment.css';

function Payment() {
  const { state, addNewOrder } = useContext(AppContext);
  const { cart, buyer } = state;
  const history = useHistory();
  const paypalOptions = {
    clientId:
      'access_token$sandbox$thsv34743jb9rrwz$7b3165cd1041cd4689470d1dac983dfa',
    intent: 'capture',
    currency: 'USD',
  };

  const buttonStyles = {
    layout: 'vertical',
    shape: 'rect',
  };

  const handlePaymentSuccess = (data) => {
    if (data.status === 'COMPLETED') {
      const newOrder = {
        buyer,
        product: cart,
        payment: data,
      };
      addNewOrder(newOrder);
      history.push('/checkout/success');
    }
  };
  return (
    <section className="Payment">
      <article className="Payment-content">
        <h3>Resumen del pedido</h3>
        {cart.map((item) => (
          <section className="Payment-item" key={item.title}>
            <article className="Payment-element">
              <h4>{item.title}</h4>
              <span>$ {item.price}</span>
            </article>
          </section>
        ))}
        <div className="Payment-button">
          <PayPalButton
            paypalOption={paypalOptions}
            buttonStyles={buttonStyles}
            amount={handSumTotal(cart)}
            onStart={() => console.log('start Payment')}
            onSuccess={(data) => handlePaymentSuccess(data)}
            onError={(error) => console.log(error)}
            onCancel={(data) => console.log(data)}
          />
        </div>
      </article>
    </section>
  );
}

export { Payment };
