import React from "react";
import ReactDOM from "react-dom/client";
import { GlobalStyle } from "./Styles/GlobalStyle";

import App from "./App";
import { GlobalProvider } from "./Context/GlobalContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <GlobalProvider>
      <App />
    </GlobalProvider>
  </React.StrictMode>
);
