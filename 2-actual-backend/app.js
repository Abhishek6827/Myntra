const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { getStoredItems, storeItems } = require("./data/items");

const app = express();

// CORS Middleware - सबसे पहले
app.use(
  cors({
    origin: [
      "https://abhishek6827.github.io",
      "http://localhost:5173",
      "http://localhost:3000",
    ],
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

// Pre-flight requests handle करें
app.options("*", cors());

// Body parser middleware
app.use(bodyParser.json());

// Root route
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

// Items routes
app.get("/items", async (req, res) => {
  try {
    const storedItems = await getStoredItems();
    // Timeout reduce करें better performance के लिए
    await new Promise((resolve) => setTimeout(resolve, 500));
    res.json({ items: storedItems });
  } catch (error) {
    console.error("Error fetching items:", error);
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
    console.error("Error fetching item:", error);
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
    console.error("Error storing item:", error);
    res.status(500).json({ error: "Failed to store item" });
  }
});

// Health check endpoint
app.get("/health", (req, res) => {
  res.status(200).json({ status: "OK", timestamp: new Date().toISOString() });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Something went wrong!" });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: "Endpoint not found" });
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`📍 Local: http://localhost:${PORT}`);
  console.log(`🌐 API Root: http://localhost:${PORT}/`);
  console.log(`📦 Items Endpoint: http://localhost:${PORT}/items`);
});
