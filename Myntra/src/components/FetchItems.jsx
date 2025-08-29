import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { itemsActions } from "../store/itemsSlice";
import { fetchStatusActions } from "../store/fetchStatusSlice";

const FetchItems = () => {
  const fetchStatus = useSelector((store) => store.fetchStatus);
  const dispatch = useDispatch();

  useEffect(() => {
    if (fetchStatus.fetchDone) return;

    const controller = new AbortController();
    const signal = controller.signal;

    dispatch(fetchStatusActions.markFetchingStarted());

    // ✅ Render.com backend URL use करें
    fetch("https://myntra-backend-3ahi.onrender.com/items", { signal })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then(({ items }) => {
        dispatch(fetchStatusActions.markFetchDone());
        dispatch(fetchStatusActions.markFetchingFinished());
        // ✅ items[0] की जगह सीधे items use करें
        dispatch(itemsActions.addInitialItems(items));
      })
      .catch((error) => {
        // Only handle the error if it's not an abort error
        if (error.name !== "AbortError") {
          console.error("Fetch error:", error);
          dispatch(fetchStatusActions.markFetchingFinished());

          // Fallback: Mock data use करें अगर API fail हो
          const mockItems = [
            {
              id: "001",
              image: "/images/1.jpg",
              company: "Carlton London",
              item_name: "Rhodium-Plated CZ Floral Studs",
              original_price: 1045,
              current_price: 606,
              discount_percentage: 42,
              return_period: 14,
              delivery_date: "10 Oct 2023",
              rating: { stars: 4.5, count: 1400 },
            },
            // Add more mock items if needed
          ];

          dispatch(fetchStatusActions.markFetchDone());
          dispatch(fetchStatusActions.markFetchingFinished());
          dispatch(itemsActions.addInitialItems(mockItems));
        }
      });

    return () => {
      controller.abort();
    };
  }, [fetchStatus, dispatch]);

  return <></>;
};

export default FetchItems;
