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

    fetch("https://myntra-backend-3ahi.onrender.com/items", { signal })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then(({ items }) => {
        // ✅ items[0] access करें क्योंकि data nested array में है
        const products = items[0] || [];

        // Validate and add default ratings if missing
        const validatedItems = products.map((item) => ({
          ...item,
          rating: item.rating || { stars: 0, count: 0 },
          return_period: item.return_period || 0,
          delivery_date: item.delivery_date || "",
        }));

        dispatch(fetchStatusActions.markFetchDone());
        dispatch(fetchStatusActions.markFetchingFinished());
        dispatch(itemsActions.addInitialItems(validatedItems));
      })
      .catch((error) => {
        if (error.name !== "AbortError") {
          console.error("Fetch error:", error);
          dispatch(fetchStatusActions.markFetchingFinished());

          // Fallback: Mock data
          const mockItems = [
            {
              id: "001",
              image: "images/1.jpg",
              company: "Carlton London",
              item_name: "Rhodium-Plated CZ Floral Studs",
              original_price: 1045,
              current_price: 606,
              discount_percentage: 42,
              return_period: 14,
              delivery_date: "10 Oct 2025",
              rating: { stars: 4.5, count: 1400 },
            },
            // ... other items
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
