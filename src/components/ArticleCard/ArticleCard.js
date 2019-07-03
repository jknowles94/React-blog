import React from 'react';
import Button from '../UI/Button/Button';
import './ArticleCard.scss';

const ArticleCard = (props) => {
  return (
    <article className="article_card">
      <img src="https://via.placeholder.com/600" alt={props.article.title}/>
      <h2>{props.article.title}</h2>
      <div className="divider"></div>
      <p>Author: <strong>Jake Knowles</strong></p>
      <Button color="primary"><span>Read More</span></Button>
    </article>
  )
}

export default ArticleCard;