import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import Button from './Button';

import numberWithComma from '../assets/data/numberWithComma';

const ProductView = props => {

    let product = props.product

    const [previewImg, setPreviewImg] = useState(product.image01);

    const [descriptionExpand, setDescriptionExpand] = useState(false);

    const [color, setColor] = useState(undefined);

    useEffect(() => {
        setPreviewImg(product.image01);
        setColor(undefined);
    },[product]);

    return (
        <div className="product">
             {/* Product's Images */}
            <div className="product__images">
                <div className="product__images__list">
                    <div className="product__images__list__item" onClick={() => setPreviewImg(product.image01)}>
                        <img src={product.image01} alt="" loading="lazy"/>
                    </div>
                    <div className="product__images__list__item" onClick={() => setPreviewImg(product.image02)}>
                        <img src={product.image02} alt="" loading="lazy"/>
                    </div>
                </div>
                <div className="product__images__main">
                    <img src={previewImg} alt="" loading="lazy"/>
                </div>
            </div>
            {/* Product's Info */}
            <div className="product__info">
                <h1 className="product__info__title">{product.title}</h1>
                <div className="product__info__item">
                    <span className="product__info__item__price">
                        {numberWithComma(product.price)}
                    </span>
                </div>
                {/* Color */}
                <div className="product__info__item">
                    <div className="product__info__item__title">
                        Color
                    </div>
                    <div className="product__info__item__list">
                        {
                            product.colors.map((item, index)=> (
                                <div key={index} className={`product__info__item__list__color ${color === item ? 'active' : ''}`} onClick={() => setColor(item)}>
                                    <div className={`circle bg-${item}`}></div>
                                </div>
                            ))
                        }
                    </div>
                </div>
                {/* The End of Color */}
                {/* HighLight */}
                <div className="product__info__item">
                    <div className="product__info__item__title">
                        What's in the box: 
                    </div>
                    <div className="product__info__item__list">
                        {
                            product.highlight.map((item, index)=> (
                                <div key={index} className="product__info__item__list__highlight">
                                    <span className="product__info__item__list__highlight__item">
                                        {item}
                                    </span>
                                </div>
                            ))
                        }
                    </div>
                </div>
                {/* The End of HighLight */}
                {/* Description */}
                <div className={`product-description ${descriptionExpand ? 'expand' : ''}`}>
                        <div className="product-description__title">
                            Description 
                        </div>
                        {/* <div className="product-description__content" dangerouslySetInnerHTML={{__html:product.description}}></div> */}
                        <div className="product-description__content">{product.description}</div>
                        <div className="product-description__content">{product.description}</div>
                        <div className="product-description__content">{product.description}</div>
                        <div className="product-description__content">{product.description}</div>
                        <div className="product-description__content">{product.description}</div>

                        <div className="product-description__toggle">
                            <Button 
                                size="sm" 
                                onClick={()=>{setDescriptionExpand(!descriptionExpand)}}
                            >
                                {
                                    descriptionExpand ? 'Hide' : 'Expand'
                                }
                            </Button>
                        </div>
                    </div>
                    {/* The End of Description */}
            </div>
            {/* Description */}
            <div className={`product-description mobile ${descriptionExpand ? 'expand' : ''}`}>
                    <div className="product-description__title">
                        Description 
                    </div>
                    {/* <div className="product-description__content" dangerouslySetInnerHTML={{__html:product.description}}></div> */}
                    <div className="product-description__content">{product.description}</div>
                    <div className="product-description__content">{product.description}</div>
                    <div className="product-description__content">{product.description}</div>
                    <div className="product-description__content">{product.description}</div>
                    <div className="product-description__content">{product.description}</div>

                    <div className="product-description__toggle">
                        <Button size="sm" onClick={()=>{
                            setDescriptionExpand(!descriptionExpand)
                        }}>
                            {
                                descriptionExpand ? 'Hide' : 'Expand'
                            }
                        </Button>
                    </div>
                </div>
            {/* The End of Description */}
        </div>
    )
}

ProductView.propTypes = {
    product: PropTypes.object
}

export default ProductView;