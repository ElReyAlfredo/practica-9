let express = require("express");
let app = express();

app.get("/", (req, res) => {
  res.send("Hello World, this is the root route");
});

app.get("/uno", (req, res) => {
  res.send("Hello World, frome route One");
});

app.get("/dos", (req, res) => {
  res.send("Saludos desde Papua Nuevaguinea😎");
});

app.get("/prueba", (req, res) => {
  res.send(`<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Document</title>
    </head>
    BIENVENIDO TILIN
    <body></body>
  </html>`);
});
app.listen(3000);
