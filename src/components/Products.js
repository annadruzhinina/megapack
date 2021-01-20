import React from "react";
import '../styles/components/products.scss';
import {PRODUCTS} from "../core/constants";
import Button from "../shared/components/Button";

function Products() {
  return (
    <section className="mp-products">
      <div className="mp-products__container">
        <p className="mp-products__subtitle">{PRODUCTS.subtitle}</p>
        <h3 className="mp-products__title">{PRODUCTS.title}</h3>
        <p className="mp-products__description">{PRODUCTS.description}</p>
        <div className="mp-products__card-list">
          {
            PRODUCTS.cards.map((item, index) => {
              return (
                <div className="mp-products__card" key={index}>
                  <div className="mp-products__card-body">
                    <img src={item.icon} alt='product'/>
                    <p className='mp-products__card-title'>{item.title}</p>
                    <p className='mp-products__card-text'>{item.text}</p>
                  </div>
                  <Button text={item.btn_text}/>
                </div>
              )
            })
          }
        </div>
      </div>
    </section>
  )
}

export default Products;
