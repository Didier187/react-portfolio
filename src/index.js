import React from "react";
import ReactDom from "react-dom";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFound from "./Notfound";

ReactDom.render(
  <BrowserRouter>
    <Routes>
     <Route path="/" element={<App />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
