import React, { Component, Fragment } from 'react';
import './App.scss';
import Header from './components/Header/Header';
import Newsletter from './components/Newsletter/Newsletter';
import Footer from './components/Footer/Footer';
import Sidebar from './components/UI/Sidebar/Sidebar';
import checkValidation from './services/checkFormValid';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ArticleCard from './components/ArticleCard/ArticleCard';
import Axios from 'axios';
class App extends Component {
  state = {
    showSidebar: false,
    newsletterForm: {
      email: {
        id: 'email',
        elementType: 'input',
        config: {
          type: 'email'
        },
        validation: {
          required: true,
          isEmail: true
        },
        value: '',
        valid: false,
        touched: false
      }
    },
    formValid: false,
    articles: [],
  };

  async componentDidMount() {
    try {
      const response = await Axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10');
      const data = await response.data;
      this.setState({
        articles: data
      })
    } catch(err) {
      console.log(err);
    }
  }

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
    // //Update state
    this.setState({newsletterForm: updatedForm, formValid: formValid});
  };

  newsletterSubmitHandler = (event) => {
    console.log(event);
  };

  render() {
    let articleCards = this.state.articles.map((article) => {
      return (
        <Col key={article.id} md={4} sm={6}>
          <ArticleCard article={article}></ArticleCard>
        </Col>
      )
    });

    return (
      <Fragment>
        <Sidebar show={this.state.showSidebar} overlayClick={this.sidebarClickHandler}/>
        <Header sidebarClick={this.sidebarClickHandler}>Blog <strong>Template</strong></Header>
        <main className="articles">
          <Container>
            <Row>
              {articleCards}
            </Row>
          </Container>
        </main>
        <Newsletter form={this.state.newsletterForm} valid={this.state.formValid} changed={this.newsletterChangedHandler} submit={this.newsletterSubmitHandler}/>
        <Footer/>
      </Fragment>
    );
  }
}

export default App;
