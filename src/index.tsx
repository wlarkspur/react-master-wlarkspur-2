import ReactDOM from "react-dom/client";
import React from "react";
import { Outlet, RouterProvider } from "react-router-dom";
import { RecoilRoot } from "recoil";
import { darkTheme } from "./theme";
import { ThemeProvider } from "styled-components";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <RecoilRoot>
      <ThemeProvider theme={darkTheme}>
        <Outlet />
      </ThemeProvider>
    </RecoilRoot>
  </React.StrictMode>
);

export default root;
