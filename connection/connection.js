"use strict";
const pg = require("pg"); // step 3 from server.js

// step 4 same always -> connection object
const pool = {
    user: "postgres",
    password: "password",
    host: "localhost",
    port: 5432,
    database: "ExpressShopDB",
    ssl: false
};

// step 5, -> export pool
module.exports = new pg.Pool(pool);

