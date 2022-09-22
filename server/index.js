const express = require('express');
var bodyParser = require('body-parser');
var mysql = require('mysql');

const app = express();
const port = 4000;

app.use(express.urlencoded({extended: true}));
app.use(bodyParser.json())

var connection = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'todo'
});

app.get("/items", function (req, res) {
  connection.query("SELECT * FROM items", function (err, data) {
    if (err) return console.log(err);
    res.send(data)
  });
})

app.post("/todo", function (req, res) {
  connection.query("insert into items (name) values (?)", [req.body.text], function (err, data) {
    if (err) return console.log(err);
    res.send('success');
  });
})

app.post("/delete", function (req, res) {
  connection.query("delete from items where id=?", [req.body.id], function (err, data) {
    if (err) return console.log(err);
    res.send('success');
  });
})

app.listen(port);
