const express = require("express");
const bcrypt = require("bcrypt");
const cors = require("cors");
const bodyParser = require("body-parser");
const db = require("./models");

const User = db.users;

if (!User) {
  console.error("⚠️ User model is undefined. Check models/index.js!");
}

const app = express();
const PORT = 3001;

app.use(cors());
app.use(bodyParser.json());

app.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;

    if (!User) {
      return res.status(500).json({ error: "User model not found" });
    }

    const user = await User.findOne({ where: { username } });

    if (user && (await bcrypt.compare(password, user.password))) {
      return res.json({ success: true, message: "✅ Login successful" });
    }

    return res.status(401).json({ error: "❌ Invalid username or password" });
  } catch (error) {
    console.error("🔥 Database error:", error);
    return res
      .status(500)
      .json({ error: "Database error", details: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Auth server running on http://localhost:${PORT}`);
});
