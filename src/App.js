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
import UnderConstruction from "./components/UnderConstruction";
import Venue from "./containers/Venue";
import RSVP from "./containers/RSVP";
import Portfolio from "./components/Portfolio";

function App() {
  const [state, setState] = useState({
    fromPortfolio: false,
  });
  useEffect(() => {
    if (window.location.href === "http://localhost:3000/?portfolio") {
      setState({ fromPortfolio: true });
    }
    if (window.location.href === "http://www.weberobling.com/?portfolio") {
      setState({ fromPortfolio: true });
    }
  });
  return (
    <div className="App">
      {state.fromPortfolio && <Portfolio />}
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
              <RSVP fromPortfolio={state.fromPortfolio} />
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
