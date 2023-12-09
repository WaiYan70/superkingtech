import React from 'react';

// Importing Each Component
import Helmet from '../components/Helmet';
import Section, {SectionTitle, SectionBody} from '../components/Section';
import Grid from '../components/Grid';

const Home = () => {
  return (
    <Helmet title="Contact">
      {/* Contact Card Section */}
      <Section>
        <SectionTitle>
          Contact Us
        </SectionTitle>
        <SectionBody>
          <Grid
            col={2}
            mdCol={1}
            smCol={1}
            gap={20}
          >
            {/* {
              contact.map((item, index) => <ContactCard
                key={index}
                name={item.name}
                description={item.description}
                icon={item.icon}
              />)
            } */}
            {/* Location */}
            <div className="contact-card">
              <div className="contact-card__icon">
                <i class='bx bx-map'></i>
              </div>
              <div className="contact-card__info">
                  <div className="contact-card__info__name">
                    Our Location
                  </div>
                  <div className="contact-card__info__description">
                    အမှတ်(၁၃၈)၊ မြေညီထပ်၊ ဆိပ်ကမ်းသာလမ်းအောက်၊ ကျောက်တံတားမြို့နယ်၊ ရန်ကုန်မြို့။
                  </div>
                  <div className="contact-card__info__description">
                    No. 138, Seik Kan Tha Street, Kyauk Ta Da TownShip, Yangon.
                  </div>
              </div>
            </div>
            {/* Phone Numbers */}
            <div className="contact-card">
              <div className="contact-card__icon">
                <i class='bx bxs-phone'></i>
              </div>
              <div className="contact-card__info">
                  <div className="contact-card__info__name">
                    Our Location
                  </div>
                  <div className="contact-card__info__description">
                    +959-882 883 901
                  </div>
                  <div className="contact-card__info__description">
                    +959-882 883 902
                  </div>
                  <div className="contact-card__info__description">
                    +959-882 883 903
                  </div>
              </div>
            </div>
            {/* FaceBook */}
            <div className="contact-card">
              <div className="contact-card__icon">
                <i class='bx bxl-facebook-square' ></i>
              </div>
              <div className="contact-card__info">
                  <div className="contact-card__info__name">
                    Connect with Us
                  </div>
                  <div className="contact-card__info__description">
                    www.facebook.com/quickmart
                  </div>
              </div>
            </div>
            {/* Mail */}
            <div className="contact-card">
              <div className="contact-card__icon">
                <i class='bx bxs-send' ></i>
              </div>
              <div className="contact-card__info">
                  <div className="contact-card__info__name">
                    Gamil
                  </div>
                  <div className="contact-card__info__description">
                    quickmart28@gmail.com
                  </div>
              </div>
            </div>
          </Grid>
        </SectionBody>
      </Section>
      {/* The End of Contact Card Section */}
    </Helmet>
  )
}

export default Home;