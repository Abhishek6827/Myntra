const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { getStoredItems, storeItems } = require("./data/items");

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// ✅ Root route add करें
app.get("/", (req, res) => {
  res.json({
    message: "Myntra Backend API is working! 🚀",
    endpoints: {
      get_all_items: "/items",
      get_single_item: "/items/:id",
      add_new_item: "/items (POST)",
    },
    documentation: "Use /items to get all products data",
  });
});

// Existing routes - ये पहले से ही work कर रही हैं
app.get("/items", async (req, res) => {
  try {
    const storedItems = await getStoredItems();
    await new Promise((resolve) => setTimeout(resolve, 1000));
    res.json({ items: storedItems });
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch items" });
  }
});

app.get("/items/:id", async (req, res) => {
  try {
    const storedItems = await getStoredItems();
    const item = storedItems.find((item) => item.id === req.params.id);
    if (!item) {
      return res.status(404).json({ error: "Item not found" });
    }
    res.json({ item });
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch item" });
  }
});

app.post("/items", async (req, res) => {
  try {
    const existingItems = await getStoredItems();
    const itemData = req.body;
    const newItem = {
      ...itemData,
      id: Math.random().toString(),
    };
    const updatedItems = [newItem, ...existingItems];
    await storeItems(updatedItems);
    res.status(201).json({ message: "Stored new item.", item: newItem });
  } catch (error) {
    res.status(500).json({ error: "Failed to store item" });
  }
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
