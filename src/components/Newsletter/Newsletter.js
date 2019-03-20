import React from 'react';
import './Newsletter.scss';
import Button from '../UI/Button/Button';

const Newsletter = (props) => {
    return (
      <div className="NewsletterSignUp">
        <h1>Newsletter</h1>
        <p>Donec elementum dui semper, pretium dui quis, pretium nisl.</p>
        <Button>Test Button</Button>
      </div>
    );
}

export default Newsletter;