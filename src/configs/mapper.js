import React from "react";

// Page
import HomePage from "containers/home"
import InformationPage from "containers/information"
import WorksPage from "containers/works"
import Auth from "containers/auth";
import Personal from "containers/personal";
import WorkUpload from "containers/personal/upload";

const Mapper = (props) => {
  switch (props.page) {
    case 'home':
      return (<HomePage />)
    case 'contact':
      return (<InformationPage page="contact" />)
    case 'about':
      return (<InformationPage page="about" />)
    case 'works':
      return (<WorksPage />)
    case 'login':
      return (<Auth page="Login" />)
    case 'register':
      return (<Auth page="Register" />)
    case 'forgot':
      return (<Auth page="Forgot" />)
    case 'profile':
      return (<Personal page="Profile" />)
    case 'setting':
      return (<Personal page="Setting" />)
    case 'upload':
      return (<WorkUpload />)
    default:
      return null;
  }
}

export default Mapper