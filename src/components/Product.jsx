import React from 'react';

function Product({ product, handleAddToCart }) {
  return (
    <article className="Products-item">
      <img src={product.image} alt={product.title} />
      <article className="Product-item-info">
        <h2>
          {Product.title}
          <span>${product.price}</span>
        </h2>
        <p className=""> {product.description}</p>
      </article>
      <button type="button" onClick={handleAddToCart(product)}>
        Comprar
      </button>
    </article>
  );
}

export default Product;
