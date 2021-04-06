import React from "react";
import PhotosPageImg from "../components/PhotosPageImg";

const Photos = () => {
  return (
    <div>
      <h1>Photos</h1>
      <h3>
        We've spent over three years taking photos together, so enjoy how cute
        we are!
      </h3>
      <div className="row">
        <PhotosPageImg imgNo={0} />
        <PhotosPageImg imgNo={0} />
        <PhotosPageImg imgNo={0} />
        <PhotosPageImg imgNo={0} />
      </div>
    </div>
  );
};

export default Photos;
