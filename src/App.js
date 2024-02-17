import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./page/HomePage";
import ErrorPage from "./page/ErrorPage";
import TermsPage from "./page/TermsPage";
import PrivacyPage from "./page/PrivacyPage";
import ContactPage from "./page/ContactPage";
import SignInPage from "./page/SignInPage";
import SignUpPage from "./page/SignUpPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="/" element={<HomePage/>} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/privacy" element={<PrivacyPage/>} />
        <Route path="/terms" element={<TermsPage />} />
        <Route path="/login" element={<SignInPage />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
