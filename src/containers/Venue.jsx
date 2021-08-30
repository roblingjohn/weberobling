import React from "react";

const Venue = () => {
  return (
    <div>
      <h1>La Maison Rouge</h1>
      <h3>Ceremony begins promptly at 6:00 pm.</h3>
      <h3>Dinner at 7.</h3>
      <h3>Dancing until they kick us out.</h3>
      <img
        src={require("../assets/images/maisonrouge.jpg")}
        alt="La Maison Rouge"
        className="venueImg"
      />
      <h3>Healey Building</h3>
      <h3>57 Forsyth St NW</h3>
      <h3>Atlanta, GA 30303</h3>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3317.189557986984!2d-84.39210318503072!3d33.75576718068775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f5041a1db6012d%3A0x397719375e95b105!2sLa%20Maison%20Rouge%20Atlanta!5e0!3m2!1sen!2sus!4v1630293722411!5m2!1sen!2sus"
        width="600"
        height="450"
        style={{border:0}}
        allowfullscreen=""
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default Venue;