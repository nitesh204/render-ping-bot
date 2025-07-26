const axios = require("axios");

const ping = () => {
  axios
    .get("https://skill-circle-backend.onrender.com/")
    .then(() => console.log("✅ Backend pinged"))
    .catch(() => console.log("❌ Failed to ping backend"));
};

// 🔁 Ping immediately once
ping();

// 🔁 Ping every 30 minutes
setInterval(ping, 30 * 60 * 1000);
