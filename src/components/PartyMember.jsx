import React from "react";

const PartyMember = (props) => {
  return (
    <div className="col col-md-3 partyMember">
      <img
        src={require(`../assets/images/weddingparty/${props.url}.jpg`)}
        className="partyImage"
        alt={props.name}
      />
      {/* <p>{props.url}</p> */}
      <h5>{props.name}</h5>
      <p>{props.title}</p>
    </div>
  );
};

export default PartyMember;
