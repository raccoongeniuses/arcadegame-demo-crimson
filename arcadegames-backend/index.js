const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.json({
    name: "Arcade Games Backend",
    version: "1.0.0",
    status: "running",
    environment: process.env.NODE_ENV || "development",
    port: PORT,
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
