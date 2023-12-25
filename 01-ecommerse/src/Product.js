import React from "react";

function Product() {
  return (
    <div className='product'>
      <div className='product__info'>
        <p>Title</p>
        <p className='product__price'>$30</p>
        <div className='product__rating'>⭐⭐⭐⭐</div>
      </div>
      <img
        src='https://images-na.ssl-images-amazon.com/images/I/71mEsHyzSCL._SL1000_.jpg'
        alt='product'
      />
      <button>add</button>
    </div>
  );
}

export default Product;
