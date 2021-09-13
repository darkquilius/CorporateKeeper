import React from 'react';

const Contact = ({ picture, firstName, lastName, position, phone, email }) => {

    const checkNull = (v) => (v === null || v === undefined ? "N/A" : v);

    return (
        <div>
        <img src={picture? picture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUwVm7UV1DxZ-d7pwo96Moy4isTIAKOXrRvg&usqp=CAU"} alt="Contact"></img>
        <div>First Name: {checkNull(firstName)}</div>
        <div>Last Name: {checkNull(lastName)}</div>
        <div>Position: {checkNull(position)}</div>
        <div>Phone: {checkNull(phone)}</div>
        <div>Email: {checkNull(email)}</div>
      </div>
    );
};

export default Contact;