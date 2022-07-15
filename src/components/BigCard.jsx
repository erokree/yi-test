import React from "react";

const BigCard = (props) => {
  return (
    <div style={{ display: props.display }} className="bigCard">
      <div className="image" >
        <img src={props.imgURL} alt="" srcSet="" />
      </div>
      <div className="description">
        {" "}
        <div className="bigName">
          {props.title}. {props.fname} {props.lname}
        </div>
        <br />
        <div className="address">
       <span id="sn">{props.sn}</span> , {props.sna}, {props.city}, {props.state}, <span id="countryName">{props.country}</span> ,{" "}
        {props.postcode} <br />
        {props.tz} - {props.td} <br />
        <span className="gender">{props.gender}</span>
        </div>
      </div>
    </div>
  );
};

export default BigCard;
