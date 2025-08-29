import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./routes/App.jsx";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { HashRouter, Routes, Route } from "react-router-dom"; // Changed import
import Bag from "./routes/Bag.jsx";
import Home from "./routes/Home.jsx";
import OrderConfirmation from "./components/OrderConfirmation.jsx";
import { Provider } from "react-redux";
import myntraStore from "./store/index.js";

// HashRouter with proper setup
const Root = () => (
  <HashRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="bag" element={<Bag />} />
        <Route path="order-confirmation" element={<OrderConfirmation />} />
      </Route>
    </Routes>
  </HashRouter>
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={myntraStore}>
      <Root />
    </Provider>
  </StrictMode>
);
