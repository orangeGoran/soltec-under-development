const express = require("express");
const path = require("path");

let port = 5675;
const app = express();

app.use(express.static("public"));
// app.get("/", (req, res) => {
//   res.status(200).send("WHATABYTE: Food For Devs");
// });

app.listen(port, () => {
  console.log(`Listening to requests on http://localhost:${port}`);
});
