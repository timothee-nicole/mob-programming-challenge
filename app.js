require("dotenv").config();
require("./config/mongodb.js");

const express = require("express");
const app = express();
const hbs = require("hbs");

console.log("Hello World");

app.use(express.static(__dirname + "/public"));
app.set("view engine", "hbs");
app.set("views", __dirname + "/views");
hbs.registerPartials(__dirname + "/views/partials");

const users = [
  {
    name: "Toto",
    email: "toto@mail.com",
    favoriteLanguage: "Javascript",
  },
];

const images = ["img/coding1.jpg", "img/coding2.jpg", "img/coding3.jpg"];

app.listen(process.env.PORT, () => {
  console.log(`server ready to rock at http://localhost:${process.env.PORT}`);
});
