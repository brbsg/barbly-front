import { useState } from "react";
import { Routes, Route, Navigate, BrowserRouter } from "react-router-dom";
import Url from "./pages/Url/Url";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Url />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
