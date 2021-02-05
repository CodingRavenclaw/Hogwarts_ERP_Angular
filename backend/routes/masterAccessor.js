const mysql = require('mysql');

const con = mysql.createConnection({
  host: 'localhost',
  port: '3307',
  user: 'headmaster',
  password: 'dumbledore',
  database: 'hogwarts',
  dateStrings: true
});

con.connect(function(err) {
  if(err) {
    console.log("Fehler bei der Verbindung zur Datenbank! " + err.stack);
  } else {
    console.log("Verbindung zur Datenbank erfolgreich hergestellt!");
  }
});

module.exports = con;