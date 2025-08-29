const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { getStoredItems, storeItems } = require("./data/items");

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors()); // CORS middleware add किया

// Render.com के लिए dynamic port handling
const PORT = process.env.PORT || 8080;

// Root route add किया
app.get("/", (req, res) => {
  res.json({
    message: "Myntra Backend API is working!",
    endpoints: {
      getItems: "/items",
      getItem: "/items/:id",
      addItem: "/items",
    },
  });
});

app.get("/items", async (req, res) => {
  try {
    const storedItems = await getStoredItems();
    // Timeout reduce किया 2s से 1s
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

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
