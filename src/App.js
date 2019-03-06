import React, { Component, Fragment } from 'react';
import './App.scss';
import Header from './components/Header/Header';
import Newsletter from './components/Newsletter/Newsletter';
import Footer from './components/Footer/Footer';
import Sidebar from './components/UI/Sidebar/Sidebar';

class App extends Component {
  state = {
    showSidebar: false
  };

  sidebarClickHandler = () => {
    let sidebarState = this.state.showSidebar;
    this.setState({
      showSidebar: !sidebarState
    })
  };

  render() {
    return (
      <Fragment>
        <Sidebar show={this.state.showSidebar}/>
        <Header sidebarClick={this.sidebarClickHandler}>Blog <strong>Template</strong></Header>
        <h1>React Blog</h1>
        <Newsletter/>
        <Footer/>
      </Fragment>
    );
  }
}

export default App;
