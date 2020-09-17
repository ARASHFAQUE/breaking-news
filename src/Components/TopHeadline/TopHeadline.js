import React, { useEffect, useState } from 'react';
import News from '../News/News';

const TopHeadline = () => {

    const [articles, setArticles] = useState([]);
    // console.log(articles);

    useEffect(() => {
        const url = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=75c37417d224491eb44ea80edef91f28'
        fetch( url )
        .then( res => res.json())
        .then( data => setArticles(data.articles))
    }, [])
    return (
        <div>
            <h1>Hot News: {articles.length}</h1>
            {
                articles.map( article => <News article={article}></News>)
            }
        </div>
    );
};

export default TopHeadline;