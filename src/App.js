import React, { useState, useEffect } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation,
} from "react-router-dom";
import Home from "./components/Home";
import NewNavbar from "./components/NewNavbar";
import Accomodations from "./containers/Accomodations";
import Photos from "./containers/Photos";
import Registry from "./containers/Registry";
import WeddingParty from "./containers/WeddingParty";
import Venue from "./containers/Venue";
import RSVP from "./containers/RSVP";
import Portfolio from "./components/Portfolio";

function App() {
  // const [state, setState] = useState({
  //   fromPortfolio: false,
  // });
  let fromPortfolio = localStorage.getItem("fromPortfolio") || false;
  useEffect(() => {
    // fromPortfolio = localStorage.getItem("fromPortfolio");
    if (
      window.location.href === "http://localhost:3000/?portfolio" ||
      window.location.href === "http://www.weberobling.com/?portfolio"
    ) {
      localStorage.setItem("fromPortfolio", true);
    } 
    // else localStorage.setItem("fromPortfolio", false);
    console.log(fromPortfolio);
  });

  return (
    <div className="App">
      {fromPortfolio && <Portfolio />}
      <Router>
        <NewNavbar />
        <div className="container">
          <Switch>
            <Route path="/accomodations">
              <Accomodations />
            </Route>
            <Route path="/photos">
              <Photos />
            </Route>
            <Route path="/registry">
              <Registry />
            </Route>
            <Route path="/weddingparty">
              <WeddingParty />
            </Route>
            <Route path="/venue">
              <Venue />
            </Route>
            <Route path="/rsvp">
              <RSVP fromPortfolio={fromPortfolio} />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
