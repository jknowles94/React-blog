import React from 'react';
import './Sidebar.scss';

const Sidebar = (props) => {
  const classes = ['Sidebar'];
  if(props.show) {
    classes.push("active");
  }
  return (
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
  );
};

export default Sidebar;