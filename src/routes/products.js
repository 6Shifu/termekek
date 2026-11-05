const express = require("express");
const db = require("../db/db");
const { products } = require("../db/schema");
const router = express.Router();

router.get("/", async (req, res) => {
    try {
        const entries = await db.select().from(products);
        res.status(200).json(entries);
    } catch (error) {
        res.status(500).json({ 
            message: error.message || "Internal Server Error"});
    }
});

module.exports = router;