import React from 'react';
import './Footer.scss';
import Container from 'react-bootstrap/Container';

const Footer = (props) => {
    return (
      <div className="Footer">
        <Container>
          <p class="text-center">Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Try awsome tool for <strong>desgners symu.co</strong></p>
        </Container>
      </div>
    );
}

export default Footer;