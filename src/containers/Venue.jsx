import React from "react";

const Venue = () => {
  return (
    <div>
      <h1>Venue</h1>
      <h2>Healey Building</h2>
      <h3>57 Forsyth St NW</h3>
      <h3>Atlanta, GA 30303</h3>
      <img src={require("../assets/images/healey.png")} className="venueImg" />
      <br />
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3317.176216504679!2d-84.39211788435735!3d33.7561119806874!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f50387216e64ad%3A0xf9da5ba3e4ba8818!2sHealey%20Building!5e0!3m2!1sen!2sus!4v1631044325546!5m2!1sen!2sus"
        width="600"
        height="450"
        style={{ border: 0 }}
        allowfullscreen=""
        loading="lazy"
      ></iframe>
      <br />
      <h1>Ceremony</h1>
      <h3>Healey Building atrium</h3>
      <img src={require("../assets/images/atrium.png")} className="venueImg" />
      <h3>Ceremony begins promptly at 6:00 pm.</h3>
      <br />
      <h1>Reception</h1>
      <h3>La Maison Rouge, downstairs</h3>
      <img
        src={require("../assets/images/maisonrouge.jpg")}
        alt="La Maison Rouge"
        className="venueImg"
      />
      <h3>
        Dinner begins following the ceremony. Dancing until they kick us out.
      </h3>
    </div>
  );
};

export default Venue;
