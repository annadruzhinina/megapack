import React from "react";
import '../styles/components/sponsors.scss';
import {SPONSORS} from "../core/constants";

function Sponsors() {
  return (
    <div className="mp-sponsors">
      {
        SPONSORS.map((item, index) => {
          return (
            <img src={item.img}
                 alt="Sponsors"
                 className="mp-sponsors__img"
                 key={index}/>
          )
        })
      }
    </div>
  )
}

export default Sponsors;
