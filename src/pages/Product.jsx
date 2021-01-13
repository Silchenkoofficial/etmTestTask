import React from 'react'
import { Link } from 'react-router-dom';
import { Typography, Breadcrumbs } from '@material-ui/core';

import Image from '../assets/images/image.jpg';
import '../styles/Product.css';

function Product({state, id}) {
    const product = state.filter((item) => item.id === id);
    return (
        <div>
            <Breadcrumbs aria-label="breadcrumb" style={{maxWidth: '100%', overflow: 'hidden'}}>
                <Link to="/catalog" style={{textDecoration: 'none', color: 'rgba(0, 0, 0, 0.5)'}}>Каталог</Link>
                <Typography style={{whiteSpace: 'nowrap'}} color="textPrimary">{product[0].title}</Typography>
            </Breadcrumbs>
            <div className="product__wrapper">
                <img className="product__image" src={Image} alt="image" />
                <div className="product__content">
                    <h1>{product[0].title}</h1>
                    <p>Производитель: {product[0].vendor}</p>
                    <p>В 1 упаковке (шт.): {product[0].pack}</p>
                    <p>Цена: {product[0].price}₽</p>
                </div>
            </div>
        </div>
    )
}

export default Product
