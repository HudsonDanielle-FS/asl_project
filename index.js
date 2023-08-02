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

// GET /products/all HTTP/1.1
app.get("/products/all", (req, res) => {
  res.send(
    `GET Products: 
      ${req.get('Page')}, 
      ${req.get('Sort')}, 
      ${req.get('Order')}`
      );
});

// GET /products/8719-small-red  HTTP/1.1
app.get("/products/:productId-:productSize-:productColor", (req, res) => {
  res.send(
    `GET Products: ${req.params.productId}, ${req.params.productSize}, ${req.params.productColor}`
  );
});

// GET /products/8719 HTTP/1.1
app.get("/products/:productId", (req, res) => {
  res.send(`GET Products: ${req.params.productId}`);
});

app.listen(3000);
