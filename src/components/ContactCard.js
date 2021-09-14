import React from 'react';
import { StyledContactCard } from './ContactCardStyles';

const ContactCard = ({ picture, firstName, lastName, position, phone, email }) => {

    const checkNull = (v) => (v === null || v === undefined ? "N/A" : v);

    function formatPhoneNumber(phoneNumberString) {
        var cleaned = ('' + phoneNumberString).replace(/\D/g, '');
        var match = cleaned.match(/^(1|)?(\d{3})(\d{3})(\d{4})$/);
        if (match) {
          var intlCode = (match[1] ? '+1 ' : '');
          return [intlCode, '(', match[2], ') ', match[3], '-', match[4]].join('');
        }
        return null;
      }

    return (
        <StyledContactCard>
<div className="container">
  <div className="card">
    <div className="front">
      <div className="logo contactImg"style={{backgroundImage: `url(${picture? picture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUwVm7UV1DxZ-d7pwo96Moy4isTIAKOXrRvg&usqp=CAU"})`, }}><span>{}</span></div>
      <div style={{paddingLeft: "15px", lineHeight: ".25", color: "#070a5a"}}>
      <h5 >{checkNull(firstName)}</h5>
      <h5>{checkNull(lastName)}</h5>
      </div>
    </div>
    <div className="back">
      <h3>{checkNull(firstName)} {checkNull(lastName)}<span>{checkNull(position)}</span></h3>
      <ul style={{display: "grid", gridTemplateColumns: "1fr 1fr"}}>
        <li>{checkNull(formatPhoneNumber(phone))}</li>
        <li>{checkNull(email)}</li>
        </ul>
    </div>
    </div>
  </div>
</StyledContactCard>
    );
};

export default ContactCard;