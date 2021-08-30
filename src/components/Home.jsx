import React from "react";

const Home = () => {
  return (
    <div className="mainBox">
      <h1>Third Time's the Charm! September 25th, 2021!</h1>
      <p>
        Yes, it is happening! We will be having our wedding on{" "}
        <strong>September 25, 2021</strong>!
      </p>
      <p>
        Please note this event is for friends and family vaccinated against
        Covid-19 only. We are taking this public health crisis seriously, and
        want ensure the safety of all our guests. Masking will be encouraged
        when possible/necessary. If you do not feel comfortable attending, we
        understand! Please do not attend if you feel sick.{" "}
      </p>
      <p>Please RSVP by September 6.</p>
      <img
        src={require("../assets/images/home.jpg")}
        className="homeImg"
        title="We cute."
      />
    </div>
  );
};

export default Home;
