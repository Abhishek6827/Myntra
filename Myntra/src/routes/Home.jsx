import HomeItem from "../components/HomeItem";
import { useSelector } from "react-redux";

const Home = () => {
  const items = useSelector((store) => store.items);

  // Inline CSS styles
  const styles = {
    main: {
      padding: "20px 0",
    },
    itemsContainer: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
      gap: "20px",
      maxWidth: "1200px",
      margin: "0 auto",
      padding: "0 20px",
    },
  };

  return (
    <main style={styles.main}>
      <div style={styles.itemsContainer}>
        {items.map((item) => (
          <HomeItem key={item.id} item={item} />
        ))}
      </div>
    </main>
  );
};

export default Home;
