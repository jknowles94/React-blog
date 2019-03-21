import React from 'react';
import './Newsletter.scss';
import Button from '../UI/Button/Button';
import Input from '../UI/Input/Input';

const Newsletter = (props) => {
    return (
      <div className="NewsletterSignUp">
        <h1>Newsletter</h1>
        <p>Donec elementum dui semper, pretium dui quis, pretium nisl.</p>
        <Input/>
        <Button>Test Button</Button>
      </div>
    );
}

export default Newsletter;