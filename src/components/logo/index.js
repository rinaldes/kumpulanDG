import React from "react";

const Logo = (props) => {
  return (
    <label className="logotype">
      <label className={props.tipe}>
        Kumpulan<span>DG</span>
      </label>
    </label>
  );
}

export default Logo