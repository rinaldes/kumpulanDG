import React from "react";

const PhotoImage = (props) => {
  return (
    <img src={props.prop.urls.thumb} className="photo-karya" />
  )
}

export default PhotoImage;