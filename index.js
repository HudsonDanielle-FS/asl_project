const { request } = require("express");
const express = require("express");
const app = express();

// GET / HTTP/1.1
app.get("/", (req, res) => {
  res.send("Home Page! GET...");
});

// POST / HTTP/1.1
app.post("/", (req, res) => {
  res.send("Home Page! POST...");
});

// GET /products/8719-small-red  HTTP/1.1
app.get("/products/:productId-:productName", (req, res) => {
  res.send(
    "GET Products: " + req.params.productId + ", " + req.params.productName
  );
});

// GET /products/8719 HTTP/1.1
app.get("/products/:productId", (req, res) => {
  res.send(`GET Products: ` + req.params.productId);
});

// GET /products/all HTTP/1.1
app.get("/products/:productPage-:productSort-:productOrder", (req, res) => {
  res.send(
    "GET Products: " +
      req.headers.productPage +
      req.headers.productSort +
      req.headers.Order
  );
});

app.listen(3000);
