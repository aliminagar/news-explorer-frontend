import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./vendor/normalize.css";
import "./index.css";
import App from "./components/App/App.jsx";

// Use basename only in production (GitHub Pages)
const basename = import.meta.env.PROD ? "/news-explorer-frontend" : "/";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter basename={basename}>
      <App />
    </BrowserRouter>
  </StrictMode>
);
