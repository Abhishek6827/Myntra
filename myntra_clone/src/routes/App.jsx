import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import FetchItems from "../components/FetchItems";
import { useSelector } from "react-redux";
import LoadingSpinner from "../components/LoadingSpinner";

function App() {
  const fetchStatus = useSelector((store) => store.fetchStatus);

  // Inline CSS styles
  const styles = {
    appContainer: {
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
    },
    mainContent: {
      flex: "1",
      padding: "20px 0",
    },
  };

  return (
    <div style={styles.appContainer}>
      <Header />
      <FetchItems />
      <main style={styles.mainContent}>
        {fetchStatus.currentlyFetching ? <LoadingSpinner /> : <Outlet />}
      </main>
      <Footer />
    </div>
  );
}

export default App;
