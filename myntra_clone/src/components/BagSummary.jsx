import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { bagActions } from "../store/bagSlice";
import { useState } from "react";

const BagSummary = () => {
  const bagItemIds = useSelector((state) => state.bag);
  const items = useSelector((state) => state.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isPlacingOrder, setIsPlacingOrder] = useState(false);

  const finalItems = items.filter((item) => bagItemIds.includes(item.id));

  const CONVENIENCE_FEES = 99;
  let totalItem = bagItemIds.length;
  let totalMRP = 0;
  let totalDiscount = 0;

  finalItems.forEach((bagItem) => {
    totalMRP += bagItem.original_price;
    totalDiscount += bagItem.original_price - bagItem.current_price;
  });

  let finalPayment = totalMRP - totalDiscount + CONVENIENCE_FEES;

  const handlePlaceOrder = async () => {
    if (totalItem === 0) {
      alert("Your bag is empty! Add some items before placing an order.");
      return;
    }

    setIsPlacingOrder(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      dispatch(bagActions.clearBag());

      navigate("/order-confirmation", {
        state: {
          orderTotal: finalPayment,
          items: finalItems,
        },
      });
    } catch (error) {
      alert("Failed to place order. Please try again.");
    } finally {
      setIsPlacingOrder(false);
    }
  };

  // Inline CSS styles
  const styles = {
    bagSummary: {
      padding: "16px",
      backgroundColor: "#fff",
      borderRadius: "4px",
      boxShadow: "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",
      marginTop: "20px",
    },
    bagDetailsContainer: {
      marginBottom: "20px",
    },
    priceHeader: {
      fontSize: "16px",
      fontWeight: "700",
      marginBottom: "16px",
      color: "#282c3f",
      textTransform: "uppercase",
    },
    priceItem: {
      display: "flex",
      justifyContent: "space-between",
      marginBottom: "12px",
      fontSize: "14px",
    },
    priceItemTag: {
      color: "#535766",
    },
    priceItemValue: {
      fontWeight: "500",
    },
    priceDetailBaseDiscount: {
      color: "#03a685",
    },
    priceFooter: {
      display: "flex",
      justifyContent: "space-between",
      fontWeight: "700",
      fontSize: "15px",
      paddingTop: "10px",
      borderTop: "1px dashed #eaeaec",
      marginTop: "10px",
    },
    btnPlaceOrder: {
      width: "100%",
      padding: "12px",
      backgroundColor: "#ff3f6c",
      color: "white",
      border: "none",
      borderRadius: "4px",
      fontSize: "16px",
      fontWeight: "600",
      cursor: "pointer",
      marginTop: "16px",
      transition: "background-color 0.3s ease",
    },
    btnPlaceOrderDisabled: {
      backgroundColor: "#ccc",
      cursor: "not-allowed",
    },
    btnPlaceOrderHover: {
      backgroundColor: "#ff527b",
    },
  };

  return (
    <div style={styles.bagSummary}>
      <div style={styles.bagDetailsContainer}>
        <div style={styles.priceHeader}>PRICE DETAILS ({totalItem} Items)</div>
        <div style={styles.priceItem}>
          <span style={styles.priceItemTag}>Total MRP</span>
          <span style={styles.priceItemValue}>₹{totalMRP}</span>
        </div>
        <div style={styles.priceItem}>
          <span style={styles.priceItemTag}>Discount on MRP</span>
          <span
            style={{
              ...styles.priceItemValue,
              ...styles.priceDetailBaseDiscount,
            }}
          >
            -₹{totalDiscount}
          </span>
        </div>
        <div style={styles.priceItem}>
          <span style={styles.priceItemTag}>Convenience Fee</span>
          <span style={styles.priceItemValue}>₹99</span>
        </div>
        <hr
          style={{
            margin: "15px 0",
            border: "none",
            borderTop: "1px solid #eaeaec",
          }}
        />
        <div style={styles.priceFooter}>
          <span style={styles.priceItemTag}>Total Amount</span>
          <span style={styles.priceItemValue}>₹{finalPayment}</span>
        </div>
      </div>
      <button
        style={{
          ...styles.btnPlaceOrder,
          ...(isPlacingOrder || totalItem === 0
            ? styles.btnPlaceOrderDisabled
            : {}),
        }}
        onClick={handlePlaceOrder}
        disabled={isPlacingOrder || totalItem === 0}
        onMouseOver={(e) => {
          if (!(isPlacingOrder || totalItem === 0)) {
            e.target.style.backgroundColor =
              styles.btnPlaceOrderHover.backgroundColor;
          }
        }}
        onMouseOut={(e) => {
          if (!(isPlacingOrder || totalItem === 0)) {
            e.target.style.backgroundColor =
              styles.btnPlaceOrder.backgroundColor;
          }
        }}
      >
        <div>{isPlacingOrder ? "PLACING ORDER..." : "PLACE ORDER"}</div>
      </button>
    </div>
  );
};

export default BagSummary;
