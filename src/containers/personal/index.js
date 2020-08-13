import React from "react";
import Setting from "./setting";
import Profile from "./profile";
import WorkUpload from "./upload";

const Personal = ({ page }) => {
  switch (page) {
    case "Setting":
      return <Setting />
      break;
    case "Profile":
      return <Profile />
      break;
    case "Upload":
      return <WorkUpload />
      break;
    default:
      return <Profile />
      break;
  }
}

export default Personal;