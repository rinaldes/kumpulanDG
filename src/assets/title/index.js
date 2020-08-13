import React from "react";

const TitleImage = ({ page, params = "" }) => {
  return (<img style={{ width: "auto", height: "250px" }} src={require("./" + page + params + ".svg")} />)
}

export default TitleImage