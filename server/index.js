const express = require("express");
const app = express();
const PORT = 8080;

// Middleware
const path = require("path");
const staticPath = path.join(__dirname, "../frontend/dist");
const serverStatic = express.static(staticPath);

const logRoutes = (req, res, next) => {
  const time = new Date().toLocaleDateString();
  console.log(`${req.method} ${req.originalUrl} ${time}`);
  next();
};

app.use(logRoutes, serverStatic);

// Controllers
const serveSomething = (req, res) => {
  res.send("Hello");
};

// Endpoints
app.get("/", serveSomething);

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});
