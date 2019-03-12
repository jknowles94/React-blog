import React from 'react';
import './Overlay.scss';

const Overlay = (props) => {
  const classes = ['Overlay'];
  if (props.show) {
    classes.push("active");
  }
  return (
    <div className={classes.join(' ')} onClick={props.clicked}></div>
  );
};

export default Overlay;