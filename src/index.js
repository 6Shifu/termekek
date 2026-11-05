require("dotenv").config();

const express = require("express");
const productsRouter = require("./routes/products");
// const usersRouter = require("./routes/users");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Routes
// app.use("/api/users", usersRouter);
app.use("/api/products", productsRouter);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
