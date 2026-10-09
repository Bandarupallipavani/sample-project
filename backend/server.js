const express = require("express");

const app = express();
const port = Number(process.env.PORT || 3000);

app.get("/api", (req, res) => {
  res.json({
    service: "backend",
    message: "Hello from the backend API!",
    status: "running"
  });
});

app.get("/api/message", (req, res) => {
  res.json({
    message: "Frontend successfully reached the backend!",
    source: "Express API",
    status: "success"
  });
});

app.get("/api/health", (req, res) => {
  res.status(200).json({ status: "healthy" });
});

app.listen(port, "0.0.0.0", () => {
  console.log(`Backend listening on port ${port}`);
});
