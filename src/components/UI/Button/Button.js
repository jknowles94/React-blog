import React from 'react';
import './Button.scss';

const Button = (props) => {
  return (
    <button disabled={props.disabled} clicked={props.clicked}>{props.children}</button>
  );
}

export default Button;