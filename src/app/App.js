import React, { Suspense, useEffect, useState } from "react";
import { hot } from "react-hot-loader";

const Warning = React.lazy(() => import("./Warning"));

import "./app.css";

const App = () => {
  const [state, setState] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setState(true);
    }, 2000);
  }, []);

  return (
    <>
      <h1>Hello World!</h1>
      <Suspense fallback={null}>{state && <Warning />}</Suspense>
    </>
  );
};

export default hot(module)(App);
