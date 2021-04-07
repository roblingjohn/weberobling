import React from "react";

const Home = () => {
  return (
    <div className="mainBox">
      <h1>Third Time's the Charm! September 25th, 2021!</h1>
      <p>
        It's been a hard year having to postpone our wedding twice, but with
        current trends, we feel confident that we will all be able to be
        together on <strong>September 25, 2021</strong> and we will be doing
        everything we can to make sure the long wait was worth it!
      </p>
      <img src={require("../assets/images/home.jpg")} className="homeImg" />
    </div>
  );
};

export default Home;
