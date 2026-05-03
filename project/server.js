const express = require("express");
const connectDB = require("./config/db");

connectDB();

const app = express();
app.use(express.json());

app.use("/products", require("./routes/productRoutes"));
app.use("/cart", require("./routes/cartRoutes"));
app.use("/", require("./routes/authRoutes"));

app.use(require("./middleware/errorMiddleware"));

app.listen(5000, () => {
  console.log("Server running on port 5000");
});