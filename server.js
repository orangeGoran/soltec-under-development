const express = require("express");
const path = require("path");

let port = 5675;
const app = express();

// app.use(express.static("public"));

app.use((req, res) => {
    res.sendFile(path.join(__dirname + '/public/index.html'));
})

app.listen(port, () => {
  console.log(`Listening to requests on http://localhost:${port}`);
});
