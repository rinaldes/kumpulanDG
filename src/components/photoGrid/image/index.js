import React from "react";
import { Avatar } from "antd";

const PhotoImage = (props) => {
  return (
    <Avatar size={150} src={props.prop.urls.thumb} className="lingkaran-foto" />
  )
}

export default PhotoImage;