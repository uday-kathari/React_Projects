import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className='home'>
      <img src='ecommerce.jpeg' alt='shop' className='home__image' />
      <div className='home__row'>
        <Product />
        <Product />
      </div>
      <div className='home__row'>
        <Product />
        <Product />
        <Product />
      </div>
      <div className='home__row'>
        <Product />
      </div>
    </div>
  );
}

export default Home;
