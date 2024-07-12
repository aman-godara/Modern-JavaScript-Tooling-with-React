import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import getGreeting from "./greet";

ReactDOM.render(<App />, document.getElementById("root"));

console.log(getGreeting("World!"));
