import React from "react";
import ReactDOM from "react-dom";

import Component from "./component";

const App = () => {
  return <Component />;
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
