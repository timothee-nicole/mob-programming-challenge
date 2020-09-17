const express = require("express");
const router = new express.Router();

const images = require("./data").images;
const users = require("./data").users;

router.get("/", (req, res) => {
  res.render("home", { images });
});

router.get("/my-dev-squad", (req, res) => {
  res.render("allUsers", { users });
});

router.get("/add-new-ironhacker", (req, res) => {
  res.render("formUser");
});

router.get("/api/ironhackers", (req, res) => {
  res.json(users);
});

/*
router.get("/my-dev-squad/:index", (req, res) => {
 // res.render("allUsers", { users });
 res.render("allUsers", { user });
});
*/

module.exports = router;
