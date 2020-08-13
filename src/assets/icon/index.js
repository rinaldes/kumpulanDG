import React from "react";

const IconImage = ({ params = "" }) => {
  return (<img style={{ width: "100%", height: "auto", marginTop: "10%" }} src={require("./" + params + ".svg")} />)
}

export default IconImage