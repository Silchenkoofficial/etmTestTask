import React from 'react';
import {Card, CardActionArea, CardActions, CardContent, CardMedia, Button, Typography} from '@material-ui/core';
import {Link} from 'react-router-dom';
import Image from '../assets/images/image.jpg';

import '../styles/Card.css';

export default function ProductCard({product}) {
  return (
    <Card className='card'>
      <CardActionArea>
        <CardMedia
          className="card__media"
          image={Image}
          title="Contemplative Reptile"
          alt="Image"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {product.title}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions style={{marginTop: 'auto'}}>
        <Button variant="contained" color="primary">
          <Link to={`/catalog/${product.id}`}><a>Подробнее</a></Link>
        </Button>
        <Typography component="p" style={{justifySelf: 'flex-end'}}>
            Цена: {product.price}₽
          </Typography>
      </CardActions>
    </Card>
  );
}