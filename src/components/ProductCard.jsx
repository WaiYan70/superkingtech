import React , { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

import Button from './Button';

import numberWithComma from '../assets/data/numberWithComma';

const ProductCard = props => {

  const [imageLoaded, setImageLoaded] = useState(false);

//   const handleImageLoad = () => {
//     setImageLoaded(true);
//     }   

  useEffect(() => {
    const fullImage = new Image();
    fullImage.src = props.img01;
    fullImage.src = props.img02; 
    fullImage.onload = () => {
        setImageLoaded(true);
    };
  },[props.img01, props.img02]);
    
  return (
    <div className="product-card">
        <Link to={`/catalog/${props.slug}`}>
            <div className="product-card__image">
                {/* <img src={props.img01} alt="" loading="lazy"/>
                <img src={props.img02} alt="" loading="lazy"/> */}
                {imageLoaded ?
                    (<img 
                        src={props.img01} 
                        alt={props.imgalt}
                    />) : 
                    (<img 
                        src={props.smimg01} 
                        alt={props.imgalt}
                        // onLoad={handleImageLoad}
                    />)
                }
                {imageLoaded ?
                    (<img 
                        src={props.img02} 
                        alt={props.imgalt}
                    />) : 
                    (<img 
                        src={props.smimg02} 
                        alt={props.imgalt}
                        // onLoad={handleImageLoad}
                    />
                    )
                }
            </div>
            <h3 className="product-card__name">{props.name}</h3>
            <div className="product-card__price">
               {numberWithComma(props.price)}
                <span className="product-card__price__old">
                    <del>{numberWithComma(250000)}</del>
                </span>
            </div>
        </Link> 
        <div className="product-card__btn">
            <Link to={`/catalog/${props.slug}`}> 
                <Button
                    size="sm"
                    icon="bx bx-cart"
                    animate={true}
                >
                    Buy It Now
                </Button>
            </Link>
        </div>
    </div>
  )
}

ProductCard.propTypes = {
    img01: PropTypes.string.isRequired,
    img02: PropTypes.string.isRequired,
    smimg01: PropTypes.string.isRequired,
    smimg02: PropTypes.string.isRequired,
    imgalt: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    slug: PropTypes.string.isRequired
}

export default ProductCard;