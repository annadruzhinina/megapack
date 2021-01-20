import React from "react";
import '../styles/components/advertisement.scss'
import {ADVERTISEMENT} from "../core/constants";

function Advertisement() {
  return (
    <section className="mp-ad">
      <div className="mp-ad__container">
        <p className="mp-ad__subtitle">{ADVERTISEMENT.subtitle}</p>
        <h3 className="mp-ad__title">{ADVERTISEMENT.title}</h3>
        <p className="mp-ad__description">{ADVERTISEMENT.description}</p>
        <div className="mp-ad__card-list">
          {
            ADVERTISEMENT.cards.map((items, index) => {
              return (
                <div className="mp-ad__card" key={index}>
                  <div className="mp-ad__card-body">
                    <img className="mp-ad__card-img" src={items.img} alt='hotDeal'/>
                    <p className="mp-ad__card-title">{items.title}</p>
                    <p className="mp-ad__card-text">{items.text}</p>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </section>
  )
}

export default Advertisement;
