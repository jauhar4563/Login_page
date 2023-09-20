const express = require('express');
const path = require('path');
const session = require('express-session');
const { v4: uuidv4 } = require("uuid");
const router = require('./router');
const nocache = require('nocache');

const app = express();

const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(session({
  secret: uuidv4(),
  resave: false,
  saveUninitialized: true
}));

app.set('view engine', 'ejs');
// Load static assets
// app.use('/static', express.static(path.join(__dirname, 'public')));
// app.use('/assets', express.static(path.join(__dirname, 'public/assets')));
app.use(express.static('public'))
app.use('/css',express.static(__dirname+'public/css'))
app.use("/public", express.static("public", { "extensions": ["js"] }));
app.use(nocache())

app.use('/route', router);


app.get('/', (req, res) => {
  if (req.session.user) {
    res.redirect('/route/dashboard');
  } else {
    const title = "login system";
    const errorMessage = " "
    res.render('base', { title, errorMessage});
  }
});

app.listen(port, () => {
  console.log("Listening to the server on http://localhost:3000")
});
