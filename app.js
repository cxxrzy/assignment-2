const express = require("express");
const path = require("path");
const app = express();
const port = 3000; 

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.render("index.ejs");
});
app.get("/aboutme", (req, res) => {
  res.render("aboutme");
});

app.get("/projects", (req, res) => {
  res.render("projects");
});

app.get("/contactme", (req, res) => {
  res.render("contactme");
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
