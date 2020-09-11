import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import NewNavbar from "./components/NewNavbar"
import Accomodations from "./containers/Accomodations";
import Photos from "./containers/Photos";
import Registry from "./containers/Registry";
import WeddingParty from "./containers/WeddingParty";
import UnderConstruction from "./components/UnderConstruction";

function App() {
  return (
    <div className="App">
      <UnderConstruction />
      <Router>
        <NewNavbar />
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
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
