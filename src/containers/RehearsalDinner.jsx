import React from "react";

const RehearsalDinner = () => {
  return (
    <div>
      <h1>Friday Welcome Party</h1>
      <p>
        There will be a welcome party on Friday September 24 at 7:30 pm. All
        guests are invited.
      </p>
      <p>
        684 John Wesley Dobbs Ave NE <br /> Atlanta, GA 30312
      </p>

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3317.035133038173!2d-84.36666218503055!3d33.75975798068656!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f50407d6a0a1fd%3A0x69b455a044cf1f8d!2s684%20John%20Wesley%20Dobbs%20Ave%20NE%2C%20Atlanta%2C%20GA%2030312!5e0!3m2!1sen!2sus!4v1630299304240!5m2!1sen!2sus"
        width="600"
        height="450"
        style={{border:0}}
        allowfullscreen=""
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default RehearsalDinner;
