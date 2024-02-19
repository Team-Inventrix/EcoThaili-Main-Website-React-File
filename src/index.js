import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));

// Ensure compatibility across environments by using globalThis
globalThis.addEventListener('pageshow', function(event) {
  // If the page is being restored from the cache
  if (event.persisted) {
    // Reload the page to prevent restoration
    globalThis.location.reload();
  }
});

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
