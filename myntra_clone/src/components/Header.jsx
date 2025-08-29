import { BsFillPersonFill } from "react-icons/bs";
import { FaBagShopping, FaFaceGrinHearts } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const bag = useSelector((store) => store.bag);

  // Inline CSS styles
  const styles = {
    header: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "10px 20px",
      backgroundColor: "white",
      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
      position: "sticky",
      top: 0,
      zIndex: 100,
      flexWrap: "nowrap",
      minHeight: "60px",
    },
    logoContainer: {
      flexShrink: 0,
    },
    myntraHome: {
      height: "36px",
    },
    navBar: {
      display: "flex",
      gap: "20px",
      flexShrink: 0,
      margin: "0 20px",
      flexWrap: "nowrap",
      overflowX: "auto",
      whiteSpace: "nowrap",
    },
    navLink: {
      textDecoration: "none",
      color: "#282c3f",
      fontSize: "14px",
      fontWeight: 600,
      letterSpacing: ".3px",
      whiteSpace: "nowrap",
    },
    searchBar: {
      display: "flex",
      alignItems: "center",
      backgroundColor: "#f5f5f6",
      borderRadius: "4px",
      padding: "0 10px",
      height: "40px",
      flexGrow: 1,
      maxWidth: "400px",
      margin: "0 20px",
    },
    searchIcon: {
      color: "#696e79",
      marginRight: "8px",
    },
    searchInput: {
      border: "none",
      background: "transparent",
      outline: "none",
      fontSize: "14px",
      width: "100%",
    },
    actionBar: {
      display: "flex",
      gap: "20px",
      flexShrink: 0,
    },
    actionContainer: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      textDecoration: "none",
      color: "#282c3f",
      fontSize: "12px",
      fontWeight: 600,
    },
    actionIcon: {
      fontSize: "18px",
      marginBottom: "2px",
    },
    bagItemCount: {
      position: "absolute",
      background: "#ff3f6c",
      color: "white",
      borderRadius: "50%",
      width: "18px",
      height: "18px",
      fontSize: "10px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      marginTop: "-8px",
      marginLeft: "12px",
    },
  };

  return (
    <header style={styles.header}>
      <div style={styles.logoContainer}>
        <Link to="/">
          <img
            style={styles.myntraHome}
            src="images/myntra_logo.webp"
            alt="Myntra Home"
          />
        </Link>
      </div>
      <nav style={styles.navBar}>
        <Link to="#" style={styles.navLink}>
          Women
        </Link>
        <Link to="#" style={styles.navLink}>
          Men
        </Link>
        <Link to="#" style={styles.navLink}>
          Kids
        </Link>
        <Link to="#" style={styles.navLink}>
          Home & Living
        </Link>
        <Link to="#" style={styles.navLink}>
          Beauty
        </Link>
        <Link to="#" style={styles.navLink}>
          Studio <sup>New</sup>
        </Link>
      </nav>
      <div style={styles.searchBar}>
        <span style={styles.searchIcon}>search</span>
        <input
          style={styles.searchInput}
          placeholder="Search for products, brands and more"
        />
      </div>
      <div style={styles.actionBar}>
        <div style={styles.actionContainer}>
          <BsFillPersonFill style={styles.actionIcon} />
          <span className="action_name">Profile</span>
        </div>

        <div style={styles.actionContainer}>
          <FaFaceGrinHearts style={styles.actionIcon} />
          <span className="action_name">Wishlist</span>
        </div>

        <Link style={styles.actionContainer} to="/bag">
          <FaBagShopping style={styles.actionIcon} />
          <span className="action_name">Bag</span>
          <span style={styles.bagItemCount}>{bag.length}</span>
        </Link>
      </div>
    </header>
  );
};

export default Header;
