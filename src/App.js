import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./page/HomePage";
import ErrorPage from "./page/ErrorPage";
import TermsPage from "./page/TermsPage";
import PrivacyPage from "./page/PrivacyPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/privacy" element={<PrivacyPage/>} />
        <Route path="/terms" element={<TermsPage />} />
        <Route path="/*" element={<ErrorPage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
