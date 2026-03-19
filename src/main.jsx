import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BookingProvider } from "./data/BookingContext.jsx"; // ✅ adjust path if needed

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BookingProvider>
      <App />
    </BookingProvider>
  </StrictMode>
);
