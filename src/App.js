import React, { Component, Fragment } from 'react';
import './App.scss';
import Header from './components/Header/Header';
import Newsletter from './components/Newsletter/Newsletter';
import Footer from './components/Footer/Footer';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header>Blog <strong>Template</strong></Header>
        <h1>React Blog</h1>
        <Newsletter/>
        <Footer/>
      </Fragment>
    );
  }
}

export default App;
