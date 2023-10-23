import React from 'react';

// import { Link } from 'react-router-dom/cjs/react-router-dom.min';

// Importing Each Component
import Helmet from '../components/Helmet';
import HeroSlider from '../components/HeroSlider';
import Section, {SectionTitle, SectionBody} from '../components/Section';
import PolicyCard from '../components/PolicyCard';
import Grid from '../components/Grid';
import ProductCard from '../components/ProductCard';

// Importting Data from "assets folder"
import heroSliderData from '../assets/data/hero-slider';
import policy from '../assets/data/policy';
import productData from '../assets/data/product';

const Home = () => {
  return (
    <Helmet title="Home">
      {/* Hero Slider */}
      <HeroSlider
        data={heroSliderData}
        control={true}
        auto={true}
        timeOut={5000}
      />
      {/* The End of Hero Slider */}

      {/* Policy Section */}
      <Section>
        <SectionBody>
          <Grid
            col={4}
            mdCol={2}
            smCol={1}
            gap={20}
          >
            {
              policy.map((item, index) => <PolicyCard
                key={index}
                name={item.name}
                description={item.description}
                icon={item.icon}
              />)
            }
            {/* {
              policy.map((item, index) => <Link key={index} to="/policy">
                <PolicyCard
                  key={index}
                  name={item.name}
                  description={item.description}
                  icon={item.icon}
                />
              </Link>
              )
            } */}
          </Grid>
        </SectionBody>
      </Section>
      {/* The End of Policy Section */}

      {/* Best Selling Section */}
      <Section>
        <SectionTitle>
          Best Selling of all the Time
        </SectionTitle>
        <SectionBody>
          <Grid
            col={4}
            mdCol={2}
            smCol={1}
            gap={20}
          >
            {
              productData.getProducts(8).map((item, index)=>(
                // Can Add the Link for directing to related single product page
                <ProductCard
                  key={index}
                  img01={item.image01}
                  img02={item.image02}
                  smimg01={item.smallimage01}
                  smimg02={item.smallimage02}
                  name={item.title}
                  price={item.price}
                  slug={item.slug}
                />
              ))
            }
          </Grid>
        </SectionBody>
      </Section>
      {/* The End of Best Selling Section */}
    </Helmet>
  )
}

export default Home;