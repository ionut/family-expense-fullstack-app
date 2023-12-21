import React from "react";
import ReactDOM from "react-dom/client";
import { GlobalStyle } from "./styles/GlobalStyle";

import App from "./App";
import { GlobalProvider } from "./context/GlobalContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <GlobalStyle />
    <GlobalProvider>
      <App />
    </GlobalProvider>
  </>
);
