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

// GET /products/683-nike-large-white-shoe HTTP/1.1
app.get("/products/:productId-:productName", (req, res) => {
    res.send(
      `Product Page! product name: ` +
        req.params.productName +
        ` Product id: ` +
        req.params.productId
    );
  });

// GET /products/nike-large-white-shoe HTTP/1.1
app.get("/products/:productName", (req, res) => {
  res.send(`Product Page! product name: ` + req.params.productName);
});

app.listen(3000);