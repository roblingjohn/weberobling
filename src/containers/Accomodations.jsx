import React from "react";
import HotelEntry from "../components/HotelEntry";

const Accomodations = () => {
  let hotelArray = [
    {
      name: "Hotel Clermont",
      img: "clermont",
      url: "https://www.hotelclermont.com/",
      address1: "789 Ponce de Leon Ave NE",
      address2: "Atlanta, GA 30306",
    },
    {
      name: "Georgian Terrace Hotel",
      img: "georgian",
      url: "https://www.thegeorgianterrace.com/",
      address1: "659 Peachtree Street NE",
      address2: "Atlanta, Georgia 30308",
    },
  ];

  return (
    <div>
      <h1>Accomodations</h1>
      <h2>
        Honestly, anyhere in Midtown/Downtown works, or get an AirBnB...these
        are just some of our favorites.
      </h2>
      <div className="row">
        {hotelArray.map((hotel) => (
          <HotelEntry
            hotelName={hotel.name}
            url={hotel.url}
            img={hotel.img}
            address1={hotel.address1}
            address2={hotel.address2}
          />
        ))}
      </div>
      {/* <HotelEntry
        hotelName="Clermont Hotel"
        img="https://www.placecage.com/g/200/300"
        address1="789 Ponce de Leon Ave NE"
        address2="Atlanta, GA 30306"
      /> */}
    </div>
  );
};

export default Accomodations;
