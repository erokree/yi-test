import React from "react";

const SingleCard = (props) => {
  return (
    <div className="scard" onClick={() => {
      props.big(props);}
    }>
      <div>{props.gender} . {props.nat} </div>
      <div>{props.title} {props.fname} {props.lname}</div>
      <div>{props.email}</div>
      
    </div>
  );
};

export default SingleCard;
