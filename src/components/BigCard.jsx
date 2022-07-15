import React from 'react'

const BigCard = (props) => {
  return (
    <div style={{display: props.display }}><img src={props.imgURL} alt="" srcSet="" />
    {props.title} {props.fname} {props.lname}
    {props.sn}, {props.sna}, {props.city}, {props.state}, {props.country}, {props.postcode}
    {props.tz} - {props.td}
    {props.gender}
    </div>
  )
}

export default BigCard