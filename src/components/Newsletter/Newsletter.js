import React from 'react';
import './Newsletter.scss';
import Button from '../UI/Button/Button';
import Input from '../UI/Input/Input';

const Newsletter = (props) => {
  return (
    <div className="NewsletterSignUp">
      <h1>Newsletter</h1>
      <p>Donec elementum dui semper, pretium dui quis, pretium nisl.</p>
      <form onSubmit={() => {props.submit()}}>
        <Input 
        elementType={props.form.email.elementType} 
        value={props.form.email.value}
        invalid={!props.form.email.valid}
        shouldValidate={props.form.email.validation}
        touched={props.form.email.touched}
        config={props.form.email.config}
        changed={(event) => props.changed(event, props.form.email.id)}
        />
        <Button disabled={!props.valid}>Sign Up</Button>
      </form>
    </div>
  );
}

export default Newsletter;