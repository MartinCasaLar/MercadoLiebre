const express = require('express');
const app = express();
const path = require('path');
let puerto = process.env.PORT || 3000
app.listen(puerto, () => console.log (`Levantando un servidor con Express en el Puerto: ${puerto}`));
app.get('/', (req, res) => {
    res.sendFile(path.join( __dirname, '/views/home.html'))
});
app.use(express.static(path.join(__dirname, "./public")))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "./views/index.html"));
  });

  app.get('/register.html', (req, res) => {
    res.sendFile(path.join(__dirname, "./views/register.html"));
  });

  app.get('/login.html', (req, res) => {
    res.sendFile(path.join(__dirname, "./views/login.html"));
  });
  

app.get ('/404', (req, res) => res.send("Error página no encontrada"))