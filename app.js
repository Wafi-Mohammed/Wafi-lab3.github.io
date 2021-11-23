const express = require("express");
const session = require("express-session");
const app = express();

app.use(express.static("public"));

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/contacts", (req, res) => {
  res.render("contacts");
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  session({
    secret: "keyboard cat",
    resave: true,
    saveUninitialized: true,
  })
);

app.get("/login", (req, res) => {
  res.render("login");
});

app.get("/register", (req, res) => {
  res.render("register");
});

const router = require("./routes/apis");
app.use(router);

const port = process.argv[2] || process.env.PORT || 3000;
const server = app.listen(port, () => {
  console.log("Cart app listening at http://localhost:${port}");
});
