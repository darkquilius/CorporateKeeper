import React from 'react';

const Contact = ({ picture, firstName, lastName, position, phone, email }) => {

    const checkNull = (v) => (v === null || v === undefined ? "N/A" : v);

    return (
        <div>
        <img src={picture? picture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUwVm7UV1DxZ-d7pwo96Moy4isTIAKOXrRvg&usqp=CAU"} alt="Contact"></img>
        <h5>First Name: {checkNull(firstName)}</h5>
        <h5>Last Name: {checkNull(lastName)}</h5>
        <h5>Position: {checkNull(position)}</h5>
        <h5>Phone: {checkNull(phone)}</h5>
        <h5>Email: {checkNull(email)}</h5>
      </div>
    );
};

export default Contact;