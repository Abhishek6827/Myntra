import { useLocation, useNavigate } from "react-router-dom";

const OrderConfirmation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { orderTotal, items } = location.state || {};

  // Inline CSS styles
  const styles = {
    container: {
      padding: "20px",
      maxWidth: "600px",
      margin: "40px auto",
      backgroundColor: "#fff",
      borderRadius: "8px",
      boxShadow: "0 0 20px rgba(0, 0, 0, 0.1)",
      textAlign: "center",
    },
    header: {
      color: "#28a745",
      marginBottom: "20px",
      fontSize: "28px",
      fontWeight: "700",
    },
    subHeader: {
      color: "#6c757d",
      marginBottom: "30px",
      fontSize: "18px",
    },
    successIcon: {
      fontSize: "60px",
      color: "#28a745",
      marginBottom: "20px",
    },
    orderDetails: {
      backgroundColor: "#f8f9fa",
      padding: "20px",
      borderRadius: "8px",
      marginBottom: "30px",
      textAlign: "left",
    },
    detailRow: {
      display: "flex",
      justifyContent: "space-between",
      marginBottom: "10px",
      paddingBottom: "10px",
      borderBottom: "1px solid #e9ecef",
    },
    detailLabel: {
      fontWeight: "600",
      color: "#495057",
    },
    detailValue: {
      fontWeight: "700",
      color: "#212529",
    },
    totalAmount: {
      fontSize: "24px",
      color: "#ff3f6c",
      margin: "20px 0",
    },
    button: {
      padding: "12px 30px",
      backgroundColor: "#ff3f6c",
      color: "white",
      border: "none",
      borderRadius: "4px",
      fontSize: "16px",
      fontWeight: "600",
      cursor: "pointer",
      transition: "all 0.3s ease",
      margin: "10px",
    },
    buttonSecondary: {
      padding: "12px 30px",
      backgroundColor: "#6c757d",
      color: "white",
      border: "none",
      borderRadius: "4px",
      fontSize: "16px",
      fontWeight: "600",
      cursor: "pointer",
      transition: "all 0.3s ease",
      margin: "10px",
    },
    itemsList: {
      marginTop: "15px",
      maxHeight: "200px",
      overflowY: "auto",
    },
    itemRow: {
      display: "flex",
      justifyContent: "space-between",
      padding: "8px 0",
      borderBottom: "1px solid #dee2e6",
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.successIcon}>✓</div>
      <h2 style={styles.header}>Order Confirmed!</h2>
      <p style={styles.subHeader}>
        Thank you for your purchase. Your order has been successfully placed.
      </p>

      <div style={styles.orderDetails}>
        <h3 style={{ marginBottom: "20px", color: "#495057" }}>
          Order Details
        </h3>

        <div style={styles.detailRow}>
          <span style={styles.detailLabel}>Order Number:</span>
          <span style={styles.detailValue}>
            #{Math.random().toString(36).substr(2, 9).toUpperCase()}
          </span>
        </div>

        <div style={styles.detailRow}>
          <span style={styles.detailLabel}>Order Date:</span>
          <span style={styles.detailValue}>
            {new Date().toLocaleDateString()}
          </span>
        </div>

        <div style={styles.detailRow}>
          <span style={styles.detailLabel}>Delivery Expected:</span>
          <span style={styles.detailValue}>Within 5-7 business days</span>
        </div>

        {orderTotal && (
          <div style={styles.totalAmount}>Total Amount: ₹{orderTotal}</div>
        )}

        {items && items.length > 0 && (
          <div>
            <h4 style={{ margin: "15px 0", color: "#495057" }}>
              Items Ordered:
            </h4>
            <div style={styles.itemsList}>
              {items.map((item) => (
                <div key={item.id} style={styles.itemRow}>
                  <span>{item.item_name}</span>
                  <span>₹{item.current_price}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      <div>
        <button
          style={styles.button}
          onClick={() => navigate("/")}
          onMouseOver={(e) => {
            e.target.style.backgroundColor = "#ff527b";
            e.target.style.transform = "translateY(-2px)";
          }}
          onMouseOut={(e) => {
            e.target.style.backgroundColor = "#ff3f6c";
            e.target.style.transform = "translateY(0)";
          }}
        >
          Continue Shopping
        </button>

        <button
          style={styles.buttonSecondary}
          onClick={() => navigate("/bag")}
          onMouseOver={(e) => {
            e.target.style.backgroundColor = "#5a6268";
            e.target.style.transform = "translateY(-2px)";
          }}
          onMouseOut={(e) => {
            e.target.style.backgroundColor = "#6c757d";
            e.target.style.transform = "translateY(0)";
          }}
        >
          View Bag
        </button>
      </div>

      <p style={{ marginTop: "20px", color: "#6c757d", fontSize: "14px" }}>
        A confirmation email has been sent to your registered email address.
      </p>
    </div>
  );
};

export default OrderConfirmation;
