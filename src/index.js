import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import AppWeb from "./containers/index";

// CSS
import "./styles/index.less";

ReactDOM.render(<AppWeb />, document.getElementById("root"));

// Ingetin nanti jadi register();
serviceWorker.register();