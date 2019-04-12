import React, { Component, Fragment } from 'react';
import './App.scss';
import Header from './components/Header/Header';
import Newsletter from './components/Newsletter/Newsletter';
import Footer from './components/Footer/Footer';
import Sidebar from './components/UI/Sidebar/Sidebar';

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

  //Checks all the validation of the input element and returns true or false
  checkValidation(value, rules) {
    let isValid = true;
    if (!rules) {
        return true;
    }
    
    if (rules.required) {
        isValid = value.trim() !== '' && isValid;
    }

    if (rules.minLength) {
        isValid = value.length >= rules.minLength && isValid
    }

    if (rules.maxLength) {
        isValid = value.length <= rules.maxLength && isValid
    }

    if (rules.isEmail) {
        const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
        isValid = pattern.test(value) && isValid
    }

    if (rules.isNumeric) {
        const pattern = /^\d+$/;
        isValid = pattern.test(value) && isValid
    }

    return isValid;
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
    updatedElement.valid = this.checkValidation(updatedElement.value, updatedElement.validation);
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
