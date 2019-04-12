import React, { Component, Fragment } from 'react';
import './App.scss';
import Header from './components/Header/Header';
import Newsletter from './components/Newsletter/Newsletter';
import Footer from './components/Footer/Footer';
import Sidebar from './components/UI/Sidebar/Sidebar';
import checkValidation from './services/checkFormValid';

class App extends Component {
  state = {
    showSidebar: false,
    newsletterForm: {
      email: {
        id: 'email',
        elementType: 'input',
        config: {
          placeholder: 'Please enter your email',
          type: 'email'
        },
        validation: {
          required: true,
          isEmail: true
        },
        value: '',
        valid: false,
        touched: false
      },
      formValid: false
    }
  };

  sidebarClickHandler = () => {
    let sidebarState = this.state.showSidebar;
    this.setState({
      showSidebar: !sidebarState
    })
  };

  newsletterChangedHandler = (event, id) => {
    //copy the form and element
    const updatedForm = {
      ...this.state.newsletterForm
    };
    let updatedElement = {
      ...updatedForm[id]
    };
    //update the element
    updatedElement.value = event.target.value;
    updatedElement.valid = checkValidation(updatedElement.value, updatedElement.validation);
    updatedElement.touched = true;
    //add element back to form
    updatedForm[id] = updatedElement;
    //Update the whole form validation
    let formValid = true;
    //Loop through form object to check each input
    for(let id in updatedForm) {
      formValid = updatedForm[id].valid && formValid
    }
    //
    // //Update state
    this.setState({newsletterForm: updatedForm, formValid: formValid});
  };

  newsletterSubmitHandler = (event) => {

  };

  render() {
    return (
      <Fragment>
        <Sidebar show={this.state.showSidebar} overlayClick={this.sidebarClickHandler}/>
        <Header sidebarClick={this.sidebarClickHandler}>Blog <strong>Template</strong></Header>
        <h1>React Blog</h1>
        <Newsletter form={this.state.newsletterForm} changed={this.newsletterChangedHandler} submit={this.newsletterSubmitHandler}/>
        <Footer/>
      </Fragment>
    );
  }
}

export default App;
