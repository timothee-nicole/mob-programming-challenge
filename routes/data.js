const express = require("express");
const router = new express.Router();

const images = ["img/coding1.jpg", "img/coding2.jpg", "img/coding3.jpg"];

const users = [
  {
    name: "Toto",
    email: "toto@mail.com",
    favoriteLanguage: "Javascript",
  },
  {
    name: "Bill",
    email: "bill@mail.com",
    favoriteLanguage: "Go",
  },
];

router.get("/users", (req, res) => {
  res.json(users);
});

/*
router.get("/my-dev-squad/:index", (req, res) => {
  const currentIndex = req.params.index; // access the :index parameter's value
  if (currentIndex <= 0 || currentIndex >= users.length)
    res.json("out of bounds");
  res.json(users[currentIndex - 1]);
});
*/

module.exports = {
  router,
  images,
  users,
};
