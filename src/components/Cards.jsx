import React from "react";
import SingleCard from "./SingleCard";
import BigCard from "./BigCard";
import { useState, useEffect } from "react";

const Cards = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch(
      "https://randomuser.me/api/?inc=gender,name,nat,location,picture,email&results=%2020#"
    )
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  //Creating Big Card
  const [big, setBig] = useState({
    fname: "",
    lname: "",
    url: "",
    title: "",
    gender: "",
    nat: "",
    email: "",
    sn: "",
    sna: "",
    city: "",
    state: "",
    country: "",
    postcode: "",
    tz: "",
    td: "",
    display: "none"
  });
  function bigC(value) {
    // console.log(value);
    setBig({
      fname: value.fname,
      lname: value.lname,
      url: value.picture,
      title: value.title,
      gender: value.gender,
      sn: value.sn,
      sna: value.sna,
      city: value.city,
      state: value.state,
      country: value.country,
      postcode: value.postcode,
      tz: value.tz,
      td: value.td,
      display: "block"
    });
  }
  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    // console.log(items.results);

    return (
      <>
        <BigCard
          fname={big.fname}
          imgURL={big.url}
          title={big.title}
          lname={big.lname}
          sn={big.sn}
          sna={big.sna}
          city={big.city}
          state={big.state}
          country={big.country}
          postcode={big.postcode}
          tz={big.tz}
          td={big.td}
          display={big.display}
        />
        <div className="cards">
          {items.results.map((item,index) => (
            <SingleCard
              key={index}
              gender={item.gender}
              fname={item.name.first}
              lname={item.name.last}
              title={item.name.title}
              nat={item.nat}
              email={item.email}
              picture={item.picture.large}
              sn={item.location.street.number}
              sna={item.location.street.name}
              city={item.location.city}
              state={item.location.state}
              country={item.location.country}
              postcode={item.location.postcode}
              tz={item.location.timezone.offset}
              td={item.location.timezone.description}
              big={bigC}
            />
          ))}
        </div>
      </>
    );
  }
};

export default Cards;
