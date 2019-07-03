import React from 'react';
import Container from 'react-bootstrap/Container';
import './FeaturedArticle.scss';
import Button from '../UI/Button/Button';

const FeaturedArticle = (props) => {
  return (
    <section className="featured_article">
      <Container>
        <h1>{props.feature.title}</h1>
        <p>{props.feature.excerpt}</p>
        <Button color="primary"><span>Read More</span></Button>
      </Container>
    </section>
    
  )
}

export default FeaturedArticle;