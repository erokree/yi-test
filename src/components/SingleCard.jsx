import React from "react";

const SingleCard = (props) => {
  return (<button onClick={
    buttonListner()
  }>
    <div className="scard" onClick={() => {
      props.big(props);}
    }>
      <div className="gender" id="nat">{props.gender} . {props.nat} </div>
      <div className="cardName">{props.title} {props.fname} {props.lname}</div>
      <div className="mail">{props.email}</div>
      
    </div></button>
  );
};

export default SingleCard;

function buttonListner(){
let buttons = document.querySelectorAll('button');
buttons.forEach(button => {
    button.addEventListener('click', function () {
        buttons.forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');        
    });
});}
