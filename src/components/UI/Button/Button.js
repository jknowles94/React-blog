import React from 'react';
import './Button.scss';

const Button = (props) => {
  let styleName = 'btn_' + props.color
  let classes = ['btn_default', styleName];
  return (
    <button className={classes.join(' ')} disabled={props.disabled} clicked={props.clicked}>{props.children}</button>
  );
}

export default Button;