import React from 'react';

import "../../styles/components/button/btn-primary-lg.scss";
import "../../styles/components/button/btn-primary-md.scss";
import "../../styles/components/button/btn-primary-sm.scss";
import "../../styles/components/button/btn-primary-shadow.scss";

function Button({text, btnStyle}) {
  const primaryLg = 'mp-btn-primary--lg';
  const primaryShadow = 'mp-btn-primary--shadow';
  const primaryMd = 'mp-btn-primary--md';
  const primarySm = 'mp-btn-primary--sm';

  const checkClass = (value) => {
    switch (value) {
      case 'lg':
        return primaryLg;
      case 'shadow':
        return primaryShadow;
      case 'md':
        return primaryMd;
      default:
        return primarySm;
    }
  }

  return (
    <button className={checkClass(btnStyle)}>{text}</button>
  );
}

export default Button;
