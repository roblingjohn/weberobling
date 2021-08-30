import React from "react";
import PartyMember from "../components/PartyMember";

const WeddingParty = () => {
  return (
    <div>
      <h1>Wedding Party</h1>
      <div className="row">
        <PartyMember name="Jessica King" url="jking" title="Maid of Honor" />
        <PartyMember name="Chet Wiseman" url="chet" title="Best Man" />
        <PartyMember name="Kim Carroll" url="kim" title="Bridesmaid" />
        <PartyMember name="Nate Ulrich" url="nate" title="Groomsman" />
      </div>
      <div className="row">
        <PartyMember name="Jenny Robling" url="jenny" title="Groomswoman" />
        <PartyMember name="Jessica Vance" url="vance" title="Bridesmaid" />
        <PartyMember name="Jason Seidman" url="jason" title="Groomsman" />
        <PartyMember
          name="Preethi Sundararaman"
          url="preethi"
          title="Bridesmaid"
        />
        <PartyMember name="Alex King" url="alex" title="Groomsman" />
        <PartyMember name="Sean Davis" url="sean" title="Bridesman" />
        <PartyMember
          name="Wes Brown"
          url="wes"
          title="Groomsman (in memoriam)"
        />
      </div>
      <div className="row">
          <PartyMember name="Devon Tully" url="devon" title="Usher"/>
          <PartyMember name="James Joslin" url="james" title="Usher"/>
          <PartyMember name="Ravikash Saini" url="ravi" title="Officiant"/>
      </div>
    </div>
  );
};

export default WeddingParty;
