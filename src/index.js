import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context/AuthProvider";
import VideosProvider from "./context/VideosProvider";

// Call make Server
makeServer();
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <VideosProvider>
          <App />
        </VideosProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
