import React, { useEffect } from 'react';

import Grid from '../components/Grid';
import Helmet from '../components/Helmet';
import ProductView from '../components/ProductView';
import ProductCard from '../components/ProductCard';
import Section, {SectionBody, SectionTitle} from '../components/Section';

import productData from '../assets/data/product';

const Product = props => {

  const product = productData.getProductBySlug(props.match.params.slug);
  // It refers for routes, "/catalog/:slug"

  const relatedProducts = productData.getProducts(4);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [product]);
  
  return (
    <Helmet title={product.title}>
      <Section>
        <SectionBody>
          <ProductView product={product} />
        </SectionBody>
      </Section>
      <Section>
        <SectionTitle>
          Eplore More
        </SectionTitle>
        <SectionBody>
          <Grid
            col={4}
            mdCol={2}
            smCol={1}
            gap={20}
          >
            {
              relatedProducts.map((item, index) => (
                <ProductCard
                  key={index}
                  img01={item.image01}
                  img02={item.image02}
                  name={item.title}
                  price={item.price}
                  slug={item.slug}
                />
              ))
            }
          </Grid>
        </SectionBody>
      </Section>
    </Helmet>
  )
}

export default Product;