import React from 'react';
import './Header.scss';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';

const Header = (props) => {
    return (
      <div className="Header">
        <Container>
          <Row>
            <Col className="py-3">{props.children}</Col>
            <Col className="py-3 py-sm-0" xs={2} sm={8}>
              <Nav activeKey="/" className="d-none d-sm-flex">
                <Nav.Item>
                  <Nav.Link className="py-3" href="/">Home</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link className="py-3">Create New Blog</Nav.Link>
                </Nav.Item>
              </Nav>
              <div className="d-block d-sm-none">
                <div className="BurgerNav"><span></span><span></span><span></span></div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
}

export default Header;