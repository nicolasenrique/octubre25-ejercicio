const fs = require("fs");
const path = require("path");

const productsFilePath = path.join(__dirname, "../data/usuarios.json");
const usuarios = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));

let userController = {
  index: function (req, res) {
    res.render("index");
  },
  list: function (req, res) {
    res.render("users", { usuarios });
  },
};

module.exports = userController;
