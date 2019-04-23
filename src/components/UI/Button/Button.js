import React from 'react';
import './Button.scss';

const Button = (props) => {
  return (
    <button className="btn_primary" disabled={props.disabled} clicked={props.clicked}>{props.children}</button>
  );
}

export default Button;