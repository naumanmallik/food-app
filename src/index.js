import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import Routes from "./routes";
import { ToastContainer, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { UserProvider } from "context/userContext";

ReactDOM.render(
  <React.StrictMode>
    <UserProvider>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </UserProvider>
    <ToastContainer position="top-right" autoClose={3000} transition={Slide} />,
  </React.StrictMode>,
  document.getElementById("root")
);
