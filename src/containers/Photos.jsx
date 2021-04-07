import React from "react";
import PhotosPageImg from "../components/PhotosPageImg";

const Photos = () => {
  let pictureNumberArray = [];

  for (let i = 0; i < 18; i++) {
    pictureNumberArray.push(i);
    console.log(pictureNumberArray);
  }

  return (
    <div>
      <h1>Photos</h1>
      <h3>
        We've spent over three years taking photos together, so enjoy how cute
        we are!
      </h3>
      <div className="row">
        {pictureNumberArray.map((picture) => (
          <PhotosPageImg imgNo={picture} />
        ))}
      </div>
    </div>
  );
};

export default Photos;
