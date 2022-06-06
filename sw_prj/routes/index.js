var express = require("express");
const { send, redirect } = require("express/lib/response");
const app = require("../app");
const { render } = require("../app");
var router = express.Router();
const database = require("../database");


router.get("/", async (req, res, next) => {
  res.render('login');
});

router.get("/signup", (req, res) => {
  
});

router.post("/signup", async (req, res) => {
  console.log("# signup");
  const id = req.body.id;
  const name = req.body.name;
  const nickname = req.body.nickname;
  const passwd = req.body.passwd;

  try {
    await database.pool.query("insert into a_user (userid, name, nickname, passwd)", [id, name, nickname, passwd]);
  } catch {
    send("error");
  }
  redirect("/");
});

router.get("/login", (req, res) => {

})

router.post("login", async (req, res) => {
  console.log("login");
  const email = req.body.email;
  const passwd = req.body.password;
  app.get('login', (req, res) => {
    res.send();
  });

});

module.exports = router;
