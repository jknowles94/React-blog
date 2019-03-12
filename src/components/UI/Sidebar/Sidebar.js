import React from 'react';
import './Sidebar.scss';
import Overlay from '../Overlay/Overlay';

const Sidebar = (props) => {
  const classes = ['Sidebar'];
  if(props.show) {
    classes.push("active");
  }
  return (
    <React.Fragment>
      <div className={classes.join(' ')}>
        {/* <Nav activeKey="/">
          <Nav.Item>
            <Nav.Link className="py-3" href="/">Home</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className="py-3">Create New Blog</Nav.Link>
          </Nav.Item>
        </Nav> */}
      </div>
      <Overlay show={props.show} clicked={props.overlayClick}></Overlay>
    </React.Fragment>
  );
};

export default Sidebar;