import React from 'react';

const Venue = () => {
    return (
        <div>
            <h1>La Maison Rouge</h1>
            <img src={require("../assets/images/maisonrouge.jpg")} alt="La Maison Rouge" className="venueImg"/>
            <h3>Healey Building
            </h3>
            <h3>57 Forsyth St NW</h3>
            <h3>Atlanta, GA 30303</h3>
        </div>
    );
};

export default Venue;