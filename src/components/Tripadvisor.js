import React from "react";
import '../styles/components/tripadvisor.scss';
import {TRIPADVISOR} from "../core/constants";
import Button from "../shared/components/Button";
import Sponsors from "./Sponsors";

function Tripadvisor() {
  return (
    <section className="mp-tripadvisor">
      <div className="mp-tripadvisor__container">
        <div className="mp-tripadvisor__banner">
          <h3 className="mp-tripadvisor__title">{TRIPADVISOR.title}</h3>
          <p className="mp-tripadvisor__description">{TRIPADVISOR.description}</p>
          <Button text={TRIPADVISOR.btnText} btnStyle={'md'}/>
        </div>
        <Sponsors/>
      </div>
    </section>
  )
}

export default Tripadvisor;
