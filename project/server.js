const express = require("express");

const app = express();
app.use(express.json());


app.listen(5100, () => {
  console.log("Server running on port 5100");
});