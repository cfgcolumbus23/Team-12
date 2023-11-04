import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Messaging from "./private_messaging.jsx";
import Feedback from "./feedback.jsx";
import SignUp from "./components/SignUp.jsx";
import SignIn from "./components/login.jsx";
import Training from "./components/courses.jsx";
import "./index.css";


ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}></Route>
      <Route path="/messages" element={<Messaging />}></Route>
      <Route path="/feedback" element={<Feedback />}></Route>
      <Route path="/signIn" element={<SignIn />}></Route>
      <Route path="/signUp" element={<SignUp />}></Route>
      <Route path="/training" element={<Training />}></Route>
    </Routes>
  </BrowserRouter>
);
