import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import ReactDOM from "react-dom";
import "./styles/index.css";
import App from "./App";
import { customTheme } from "./theme/custom.theme";

ReactDOM.render(
  <ThemeProvider theme={customTheme}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ThemeProvider>,
  document.getElementById("root")
);
