import React from "react";
import '../styles/components/review.scss';
import {REVIEW} from "../core/constants";


function Review() {
  return (
    <section className="mp-review">
      <p className="mp-review__text">{REVIEW.text}</p>
      <h3 className="mp-review__name">{REVIEW.name}</h3>
      <p className="mp-review__website">{REVIEW.website}</p>
      <img className="mp-review__img" src={REVIEW.img} alt="Customer photo"/>
    </section>
  )
}

export default Review;
