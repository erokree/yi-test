import React from "react";

const SingleCard = (props) => {
  return (
    <div className="scard" onClick={() => {
      props.big(props);}
    }>
      <div className="gender" id="nat">{props.gender} . {props.nat} </div>
      <div className="cardName">{props.title} {props.fname} {props.lname}</div>
      <div className="mail">{props.email}</div>
      
    </div>
  );
};

export default SingleCard;
