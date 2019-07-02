import React from 'react';
import Button from '../UI/Button/Button';

const ArticleCard = (props) => {
  console.log(props);
  return (
    <article>
      <img src="https://via.placeholder.com/250" alt={props.article.title}/>
      <h3>{props.article.title}</h3>
      <p>Author: Jake Knowles</p>
      <Button>Read More</Button>
    </article>
  )
}

export default ArticleCard;