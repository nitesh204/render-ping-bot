const axios = require('axios');

const URL = "https://skill-circle-backend.onrender.com"; // Apna backend link

async function pingWithRetry() {
  try {
    const res = await axios.get(URL);
    console.log(`[${new Date().toLocaleTimeString()}] Pinged: ${res.status}`);
  } catch (err) {
    console.error('Initial ping failed. Retrying in 5s...');
    setTimeout(pingWithRetry, 5000); // Retry after 5 sec
  }
}

setInterval(pingWithRetry, 1000 * 60 * 4); // every 4 min
