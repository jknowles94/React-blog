import React from 'react';
import './Input.scss';

const Input = (props) => {
  let input = null;
  
  switch(props.elementType){
    case('input'):
      input = <input 
      value={props.value}
      {...props.config}
      onChange={props.changed} />;
      break;
    //case for select
    //case for text area
    default:
      input = <input
      value={props.value} 
      {...props.config}
      onChange={props.changed} />;
  }
  return (
    <div>
      {input}
    </div>
  );
}

export default Input;
