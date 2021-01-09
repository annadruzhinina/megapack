import React from "react";
import {HERO} from "../core/constants";
import Button from "../shared/components/Button";

import SearchIcon from "mdi-react/SearchIcon";

import {createInnerHtml} from "../core/utils";

import "../styles/components/hero.scss";
import RoomIcon from "mdi-react/RoomIcon";

function Hero() {
  return (
    <section className='mp-hero'>
      <div className="mp-hero__container">
        <h1 className='mp-hero__title'
            dangerouslySetInnerHTML={createInnerHtml(HERO.title)}></h1>
        <p className="mp-hero__description" dangerouslySetInnerHTML={createInnerHtml(HERO.description)}></p>
        <Button text={HERO.btn_text} btnStyle={'lg'} btnClass={'mp-hero__btn'}/>
        <div className="mp-hero__list">
         {HERO.cards.map((card, index) => {
            return (
              <div className="mp-hero__list-item" key={index}>
                <div className="mp-hero_list-icon">
                  {card.icon === 'map' && <RoomIcon className="mp-hero__list-icon"/>}
                  {card.icon === 'lock' && <SearchIcon className="mp-hero__list-icon"/>}
                  {card.icon === 'food' && <SearchIcon className="mp-hero__list-icon"/>}
                  {card.icon === 'world' && <SearchIcon className="mp-hero__list-icon"/>}
                </div>
                <div className="mp-hero__list-description">
                  <p>{card.text}</p>
                </div>
              </div>
            )
          })}
        </div>
        </div>
    </section>
  )
}

export default Hero;
