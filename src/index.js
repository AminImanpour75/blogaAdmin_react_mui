import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Register } from "./pages/Register";
import { Login } from "./pages/Login";
import { CssBaseline } from "@mui/material";
import { Create } from "./pages/Create";
import { Home } from "./pages/Home";
import { Article } from "./pages/Article";
import { Edit } from "./pages/Edit";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <CssBaseline />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="/create" element={<Create />} />
          <Route path="/article/:slug" element={<Article />} />
          <Route path="/edit/:slug" element={<Edit />} />
        </Route>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
