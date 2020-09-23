import React from "react";

const HotelEntry = (props) => {
  return (
    <div className="col col-med-4">
      <img
        className="hotelImg"
        src={require(`../assets/images/hotels/${props.img}.jpg`)}
        alt={props.hotelName}
      ></img>
      <h2>{props.hotelName}</h2>
      {props.hotelName === "Clermont Hotel" && <h4>(We are staying here)</h4>}
      <h5>{props.address1}</h5>
      <h5>{props.address2}</h5>
    </div>
  );
};

export default HotelEntry;