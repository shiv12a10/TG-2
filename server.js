const fetch = require("node-fetch");

module.exports = async (req, res) => {
  const NEWS_API_KEY = process.env.NEWS_API_KEY;

  const url = `https://newsapi.org/v2/top-headlines?country=in&pageSize=12&apiKey=${NEWS_API_KEY}`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    res.setHeader("Access-Control-Allow-Origin", "*"); // allow CORS for demo
    res.status(200).json(data);
  } catch (err) {
    res
      .status(500)
      .json({ error: "Failed to fetch news", details: err.message });
  }
};
