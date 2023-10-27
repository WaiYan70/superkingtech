import React from 'react';

// Importing Each Component
import Helmet from '../components/Helmet';
import Section, {SectionTitle, SectionBody} from '../components/Section';
import Grid from '../components/Grid';
import ContactCard from '../components/ContactCard';

// Importting Data from "assets folder"
import contact from '../assets/data/contact';

const Home = () => {
  return (
    <Helmet title="Contact">
      {/* Contact Card Section */}
      <Section>
        <SectionTitle>
          Contact
        </SectionTitle>
        <SectionBody>
          <Grid
            col={1}
            mdCol={2}
            smCol={1}
            gap={20}
          >
            {
              contact.map((item, index) => <ContactCard
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
      {/* The End of Contact Card Section */}
    </Helmet>
  )
}

export default Home;