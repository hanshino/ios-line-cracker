const express = require("express");
const app = express();
const path = require("path");

app.all("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "public", "index.htm"));
});

app.listen(process.env.PORT || 3000);
