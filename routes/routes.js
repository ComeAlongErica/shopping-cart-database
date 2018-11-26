"use strict";
const express = require("express");
const routes = express.Router();
const pool = require("../connection/connection.js");

function getTable(req, res) {
    pool.query("SELECT * FROM shopping_cart ORDER BY id").then((result) => {
        res.json(result.rows);
    });
}

routes.get("/products", (req, res) => {
    getTable(req, res);
});

routes.post("/products", (req, res) => {
    pool.query("INSERT INTO shopping_cart(product, price, quantity) VALUES($1::text, $2::int, $3::int)", [req.body.product, req.body.price, req.body.quantity]).then(() => {
        getTable(req, res);
    });
});

routes.put("/products/:id", (req, res) => {
    pool.query("UPDATE shopping_cart SET product=$1::text, price=$2::int, quantity=$3::int WHERE id=$4::int", [req.body.product, req.body.price, req.body.quantity, req.params.id]).then(() => {
        getTable(req, res);
    });
});

routes.delete("/products/:id", (req, res) => {
    pool.query("DELETE FROM shopping_cart WHERE id=$1::int", [req.params.id]).then(() => {
        getTable(req, res);
    });
});

module.exports = routes;