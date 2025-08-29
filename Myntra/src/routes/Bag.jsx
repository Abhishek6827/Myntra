import { useSelector } from "react-redux";
import BagItem from "../components/BagItem";
import BagSummary from "../components/BagSummary";

const Bag = () => {
  const bagItems = useSelector((state) => state.bag);
  const items = useSelector((state) => state.items);

  const finalItems = items.filter((item) => bagItems.includes(item.id));

  // Inline CSS styles
  const styles = {
    main: {
      padding: "20px 0",
    },
    bagPage: {
      display: "flex",
      maxWidth: "1200px",
      margin: "0 auto",
      padding: "0 20px",
      gap: "20px",
    },
    bagItemsContainer: {
      flex: "1",
    },
  };

  return (
    <main style={styles.main}>
      <div style={styles.bagPage}>
        <div style={styles.bagItemsContainer}>
          {finalItems.map((item) => (
            <BagItem key={item.id} item={item} />
          ))}
        </div>
        <BagSummary />
      </div>
    </main>
  );
};

export default Bag;
