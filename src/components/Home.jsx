import React from "react";

const Home = () => {
  return (
    <div className="mainBox">
      <h1>Third Time's the Charm! September 25th, 2021!</h1>
      <p>
        Yes, it is happening! We will be having our wedding on{" "}
        <strong>September 25, 2021</strong>!
      </p>
      <p>Please RSVP by September 6.</p>
      <img
        src={require("../assets/images/home.jpg").default}
        className="homeImg"
        title="We cute."
      />
    </div>
  );
};

export default Home;