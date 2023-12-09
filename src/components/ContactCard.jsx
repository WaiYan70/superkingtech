import React from 'react';
import PropTypes from 'prop-types'

const ContactCard = props => {
  return (
    <div className="contact-card">
        <div className="contact-card__icon">
            <i className={props.icon}></i>
        </div>
        <div className="contact-card__info">
            <div className="contact-card__info__name">
                {props.name}
            </div>
            <div className="contact-card__info__description">
              အမှတ်(၁၃၈)၊ မြေညီထပ်၊ ဆိပ်ကမ်းသာလမ်းအောက်၊ ကျောက်တံတားမြို့နယ်၊ ရန်ကုန်မြို့။
            </div>
            <div className="contact-card__info__description">
              No. 138, Seik Kan Tha Street, Kyauk Ta Da TownShip, Yangon.
            </div>
        </div>
    </div>
  )
}

ContactCard.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired
}

export default ContactCard;