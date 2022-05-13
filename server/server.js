const express = require("express");
const app = express();
const cors = require("cors");
const PORT = process.env.port || 8000;
const db = require("./config/dbconfig");

let corsOption = {
  origin: "*",
  credential: true,
};

app.use(cors(corsOption));

app.get("/start", (req, res) => {
  const sqlQuery = "SELECT * FROM `USER`";
  db.query(sqlQuery, (err, result) => {
    if (err) {
      // console.log(err);
    } else {
      res.send(result);
    }
  });
  console.log("리퀘스트 요청");
});

app.listen(PORT, () => {
  console.log(`가동중인 포트는 ${PORT}`);
});
