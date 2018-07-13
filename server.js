const express = require("express");
const server = express();
const path = require("path");

server.use(express.static(path.resolve(__dirname, "dist/contacts")));
server.get("/*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "dist/contacts/index.html"));
});

server.listen(process.env.PORT || 3000);
