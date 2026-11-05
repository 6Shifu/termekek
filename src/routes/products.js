const express = require("express");
const db = require("../db/db");
const { products } = require("../db/schema");
const router = express.Router();
const { eq } = require("drizzle-orm");

router.get("/", async (req, res) => {
  try {
    const entries = await db.select().from(products);
    res.status(200).json(entries);
  } catch (error) {
    res.status(500).json({
      message: error.message || "Internal Server Error",
    });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const [entry] = await db
      .select()
      .from(products)
      .where(eq(products.id, +req.params.id));
    if (!entry) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.status(200).json(entry);
  } catch (error) {
    res.status(500).json({
      message: error.message || "Internal Server Error",
    });
  }
});

module.exports = router;
