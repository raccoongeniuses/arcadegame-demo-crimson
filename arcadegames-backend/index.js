require("dotenv").config();
const express = require("express");

const app = express();
const PORT_SERVER = process.env.PORT_SERVER;

app.get("/", (req, res) => {
  res.json({
    name: "Arcade Games Backend",
    version: "1.0.0",
    status: "running",
    environment: process.env.NODE_ENV || "development",
    port: PORT,
  });
});

app.listen(PORT_SERVER, () => {
  console.log(`Server running on http://localhost:${PORT_SERVER}`);
});
