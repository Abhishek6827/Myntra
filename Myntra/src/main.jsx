import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./routes/App.jsx";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { HashRouter } from "react-router-dom";
import { Provider } from "react-redux";
import myntraStore from "./store/index.js";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HashRouter>
      <Provider store={myntraStore}>
        <App />
      </Provider>
    </HashRouter>
  </StrictMode>
);
