import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Register from "./components/Register";
import ValidatePhone from "./components/ValidatePhone";
import CodeVerification from "./components/CodeVerification";
import Conditions from "./components/Conditions";
import SendCode from "./components/SendCode";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/validatephone" element={<ValidatePhone />} />
        <Route exact path="/codeverification" element={<CodeVerification />} />
        <Route exact path="/conditions" element={<Conditions />} />
        <Route exact path="/sendcode" element={<SendCode />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;