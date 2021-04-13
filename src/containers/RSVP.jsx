import React, { Component } from "react";

class RSVP extends Component {
  state = {
    attendeeName: "",
    attendeeEmail: "",
    canAttend: false,
    hasGuest: false,
    guestName: "",
    children: 0,
    foodSelections: [],
    songRequest: "",
  };

  render() {
    return (
      <div className="rsvp">
        <h1>RSVP</h1>
        <form>
          <div className="row">
            <div className="col col-sm-3">
              <label for="name">Attendee name</label>{" "}
            </div>
            <div className="col col-sm-2">
              <input type="text" id="name" name="name" value=""></input>
            </div>
          </div>
          <div className="row">
            <div className="col col-sm-3">
              <label for="email">Email</label>{" "}
            </div>
            <div className="col col-sm-2">
              <input type="text" id="email" name="email" value=""></input>
            </div>
          </div>
          <div className="row">
            <div className="col col-sm-3">Will you be able to attend? </div>
            <div className="col col-sm-2">
              <input type="radio" id="yes" name="canAttend" value="yes" />
              <label for="yes">Yes</label>
              <input type="radio" id="no" name="canAttend" value="no" />
              <label for="no">No</label>
            </div>
          </div>
          <div className="row">
            <div className="col col-sm-3">Will you be bringing a guest? </div>
            <div className="col col-sm-2">
              <input type="radio" id="yes" name="canAttend" value="yes" />
              <label for="yes">Yes</label>
              <input type="radio" id="no" name="canAttend" value="no" />
              <label for="no">No</label>
            </div>
          </div>
          <div className="row">
            <div className="col col-sm-3">
              <label for="name">Guest name</label>{" "}
            </div>
            <div className="col col-sm-2">
              <input type="text" id="name" name="name" value=""></input>
            </div>
          </div>
          <div className="row">
            <div className="col col-sm-3">Number of children:</div>
            <div className="col col-sm-2">
              <select name="chidren" id="children">
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
            </div>
          </div>
          <div className="row">
            <div className="col col-sm-3">
              <label for="mainFood">Food Selection: </label>{" "}
            </div>
            <div className="col col-sm-2">
              <select name="mainFood" id="mainFood">
                <option value="Buffalo Gal">Buffalo Gal</option>
                <option value="Other Selection">Other Selection</option>
              </select>
            </div>
          </div>
          <div className="row">
            <div className="col col-sm-3">
              <label for="mainFood">Food Selection: </label>{" "}
            </div>
            <div className="col col-sm-2">
              <select name="mainFood" id="mainFood">
                <option value="Buffalo Gal">Buffalo Gal</option>
                <option value="Other Selection">Other Selection</option>
              </select>
            </div>
          </div>
          <div className="row">
            <div className="col col-sm-3">
              <label for="songRequest">Any song request?</label>{" "}
            </div>
            <div className="col col-sm-2">
              <input
                type="text"
                id="songRequest"
                name="songRequest"
                value=""
              ></input>
            </div>
          </div>
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default RSVP;
