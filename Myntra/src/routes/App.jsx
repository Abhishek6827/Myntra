// App.jsx
import { Routes, Route } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import FetchItems from "../components/FetchItems";
import { useSelector } from "react-redux";
import LoadingSpinner from "../components/LoadingSpinner";
import Home from "../routes/Home";
import Bag from "../routes/Bag";
import OrderConfirmation from "../components/OrderConfirmation";

function App() {
  const fetchStatus = useSelector((store) => store.fetchStatus);

  return (
    <>
      <Header />
      <FetchItems />
      <main>
        {fetchStatus.currentlyFetching ? (
          <LoadingSpinner />
        ) : (
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/bag" element={<Bag />} />
            <Route path="/order-confirmation" element={<OrderConfirmation />} />
          </Routes>
        )}
      </main>
      <Footer />
    </>
  );
}

export default App;
