import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import {
  FluentProvider,
  teamsDarkTheme,
  webDarkTheme,
  webLightTheme,
} from "@fluentui/react-components";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <FluentProvider theme={webLightTheme}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </FluentProvider>
);
