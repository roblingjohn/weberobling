import React, { Component } from "react";

class RSVP extends Component {
  state = {
    attendeeName: "",
    attendeeEmail: "",
    canAttend: false,
    hasGuest: false,
    guestName: "",
    children: 0,
    mainFoodSelection: "",
    guestFoodSelection: "",
    songRequest: "",
  };

  componentDidMount() {
    console.log(this.props);
  }

  handleInputChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({ ...this.state, [name]: value });
  };

  handleBool = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    if (value === "true") {
      this.setState({ ...this.state, [name]: true });
    } else if (value === "false") {
      this.setState({ ...this.state, [name]: false });
    }
  };

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.props.fromPortfolio === true) {
      alert(
        "I did ask you not to RSVP. I appreciate you checking out the functionality, but I also don't want to muddy up the results with people testing out the mechanism for this. But since you're curious, here's the info that goes to the database."
      );
      alert(`Attendee name: ${this.state.attendeeName}
      Email: ${this.state.attendeeEmail}
      Can attend: ${this.state.canAttend}
      Has guest: ${this.state.hasGuest}
      Guest name: ${this.state.guestName}
      Children: ${this.state.children}
      Food Selection 1: ${this.state.mainFoodSelection}
      Food Selection 2: ${this.state.guestFoodSelection}
      Song Request: ${this.state.songRequest}`);
    }

    if (this.props.fromPortfolio === false) {
      alert(`Attendee name: ${this.state.attendeeName}
      Email: ${this.state.attendeeEmail}
      Can attend: ${this.state.canAttend}
      Has guest: ${this.state.hasGuest}
      Guest name: ${this.state.guestName}
      Children: ${this.state.children}
      Food Selection 1: ${this.state.mainFoodSelection}
      Food Selection 2: ${this.state.guestFoodSelection}
      Song Request: ${this.state.songRequest}`);
    }
  };

  render() {
    return (
      <div className="rsvp">
        <h1>RSVP</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="row">
            <div className="col col-sm-3">
              <label for="attendeeName">Attendee name</label>{" "}
            </div>
            <div className="col col-sm-2">
              <input
                type="text"
                id="attendeeName"
                name="attendeeName"
                value={this.state.attendeeName}
                onChange={this.handleInputChange}
              ></input>
            </div>
          </div>
          <div className="row">
            <div className="col col-sm-3">
              <label for="attendeeEmail">Email</label>{" "}
            </div>
            <div className="col col-sm-2">
              <input
                type="text"
                id="attendeeEmail"
                name="attendeeEmail"
                value={this.state.attendeeEmail}
                onChange={this.handleInputChange}
              ></input>
            </div>
          </div>
          <div className="row">
            <div className="col col-sm-3">Will you be able to attend? </div>
            <div className="col col-sm-2">
              <input
                type="radio"
                id="yes"
                name="canAttend"
                value="true"
                onChange={this.handleBool}
              />
              <label for="yes">Yes</label>
              <input
                type="radio"
                id="no"
                name="canAttend"
                value="false"
                onChange={this.handleBool}
              />
              <label for="no">No</label>
            </div>
          </div>
          {this.state.canAttend && (
            <>
              <div className="row">
                <div className="col col-sm-3">
                  Will you be bringing a guest?{" "}
                </div>
                <div className="col col-sm-2">
                  <input
                    type="radio"
                    id="yes"
                    name="hasGuest"
                    value="true"
                    onChange={this.handleBool}
                  />
                  <label for="yes">Yes</label>
                  <input
                    type="radio"
                    id="no"
                    name="hasGuest"
                    value="false"
                    onChange={this.handleBool}
                  />
                  <label for="no">No</label>
                </div>
              </div>
              {this.state.hasGuest && (
                <>
                  <div className="row">
                    <div className="col col-sm-3">
                      <label for="guestName">Guest name</label>{" "}
                    </div>
                    <div className="col col-sm-2">
                      <input
                        type="text"
                        id="guestName"
                        name="guestName"
                        value={this.state.guestName}
                        onChange={this.handleInputChange}
                      ></input>
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
                </>
              )}

              <div className="row">
                <div className="col col-sm-3">
                  <label for="mainFoodSelection">Food Selection: </label>{" "}
                </div>
                <div className="col col-sm-2">
                  <select name="mainFoodSelection" id="mainFoodSelection">
                    <option value="Buffalo Gal">Buffalo Gal</option>
                    <option value="Other Selection">Other Selection</option>
                  </select>
                </div>
              </div>
              {this.state.hasGuest && (
                <>
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
                  </div>{" "}
                </>
              )}

              <div className="row">
                <div className="col col-sm-3">
                  <label for="songRequest">Song request?</label>{" "}
                </div>
                <div className="col col-sm-2">
                  <input
                    type="text"
                    id="songRequest"
                    name="songRequest"
                    value={this.state.songRequest}
                    onChange={this.handleInputChange}
                  ></input>
                </div>
              </div>
            </>
          )}

          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default RSVP;
