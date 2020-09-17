import React from 'react';
import { Card, Button } from 'react-bootstrap'

const News = ( props ) => {
    const { title, description, urlToImage, url } = props.article;
    return (
        <Card>
            {/* <Card.Header as="h5">Featured</Card.Header> */}
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Img variant="top" style={{width: '700px'}} src={urlToImage} />
                <Card.Text>{description}</Card.Text>
                <a href={url} target="_blank"><Button variant="primary">Full News</Button></a>
            </Card.Body>
        </Card>
    );
};

export default News;