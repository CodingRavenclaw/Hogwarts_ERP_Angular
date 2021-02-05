const express = require("express");
const aMasterAccessor = require("../routes/masterAccessor");
const router = express.Router();

router.get('/houses', function(req, res) {
  let strSqlStatement = "SELECT * FROM hogwarts.house;";
  let arrInserts = [];
  aMasterAccessor.query(strSqlStatement, arrInserts, function(error, results, fields) {
    if(error) {
      console.log("Fehler beim Ausführen des Statements!" + error);
      return res.status(500).send("Fehler beim Laden der Häuser!");
    } else {
      return res.status(200).send({"data": results});
    }
  });
});

module.exports = router;