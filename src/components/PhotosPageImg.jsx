import React from "react";

const PhotosPageImg = (props) => {
  return (
    <div className="col col-md-4">
      <img
        src={require(`../assets/images/photospage/${props.imgNo}.jpg`)}
        className="photosPageImg"
      />
    </div>
  );
};

export default PhotosPageImg;
