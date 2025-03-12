const mysql = require("mysql2");
const bcrypt = require("bcrypt");

// Create MySQL connection
const db = mysql.createConnection({
  host: "localhost",
  user: "arcadeuser",
  password: "arcadepass",
  database: "arcadegames",
});

const users = [
  "vision",
  "tester08",
  "tester02",
  "tester27",
  "tester03",
  "tester88",
  "Crimson",
  "dgp_loi",
  "tester05",
  "tester06",
  "tester04",
  "tester0122",
  "tester01",
];

const password = "123456";

db.connect(async (err) => {
  if (err) {
    console.error("Database connection failed:", err);
    return;
  }
  console.log("Connected to MySQL database");

  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    for (const username of users) {
      const query =
        "INSERT INTO users (username, password) VALUES (?, ?) ON DUPLICATE KEY UPDATE password = ?";
      db.query(
        query,
        [username, hashedPassword, hashedPassword],
        (err, result) => {
          if (err) {
            console.error(`Error inserting ${username}:`, err);
          } else {
            console.log(`✅ ${username} added successfully!`);
          }
        }
      );
    }
  } catch (error) {
    console.error("Hashing error:", error);
  } finally {
    setTimeout(() => db.end(), 2000);
  }
});
