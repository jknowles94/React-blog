import React from 'react';
import './Input.scss';

const Input = (props) => {
  let input = null;
  let inputClasses = ['form_input'];
  // check if the input is valid or not after it has been touched
  if(props.invalid && props.shouldValidate && props.touched) {
    inputClasses.push('invalid');
  }

  switch(props.elementType){
    case('input'):
      input = <input 
      className={inputClasses.join(' ')}
      value={props.value}
      {...props.config}
      onChange={props.changed} />;
      break;
    //case for select
    //case for text area
    default:
      input = <input
      className="form_input"
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
