import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context/AuthProvider";
import VideosProvider from "./context/VideosProvider";
import WatchlaterProvider from "./context/WatchlaterProvider";
import LikesProvider from "./context/LikesProvider";
import PlaylistProvider from "./context/PlaylistProvider";
import HistoryProvider from "./context/HistoryProvider";

// Call make Server
makeServer();
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(
  <React.StrictMode>
    <AuthProvider>
      <LikesProvider>
        <WatchlaterProvider>
          <HistoryProvider>
            <PlaylistProvider>
              <VideosProvider>
                <BrowserRouter>
                  <App />
                </BrowserRouter>
              </VideosProvider>
            </PlaylistProvider>
          </HistoryProvider>
        </WatchlaterProvider>
      </LikesProvider>
    </AuthProvider>
  </React.StrictMode>
);
