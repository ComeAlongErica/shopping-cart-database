"use strict";

const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const routes = require("./routes/routes.js");

console.log(process.env.dog_name);


app.use(express.static("./public"));
app.use(express.json());
app.use("/", routes);

app.listen(port, _ => console.log(`Server is running PORT: ${port}`));

















