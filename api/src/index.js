const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const port = 3001;

app.use(cors());
app.use(bodyParser.json());
app.get("/", (req, res) => res.send("Hello Adam!"));
app.post("/", (req, res) => {
  console.log(req.body);
  const message = req.body.message;
  res.send(`${message}!!`);
});
app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
