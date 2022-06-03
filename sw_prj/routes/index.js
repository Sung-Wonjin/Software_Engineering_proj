var express = require("express");
const { send, redirect } = require("express/lib/response");
const app = require("../app");
const { render } = require("../app");
var router = express.Router();
const database = require("../database");


router.get("/", async (req, res, next) => {
  const page = parseInt(req.query.page) || 0;

  const products = await database.query("select * from a_product order by created desc, id asc limit ?, 10", [page]);
  console.log(products);
  res.send("page" + page);
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

router.post("login", (req, res) => {
  console.log("logon");
  const id = req.body.id;
  const passwd = req.body.pwd;
  app.get('/login', function(req, res){
    res.render('main', {
    })
  })

});

module.exports = router;
