const express = require("express");
const aMasterAccessor = require("../routes/masterAccessor");
const router = express.Router();

router.post('/students', function(req, res) {
  let strFirstname = '%' + req.body.firstname + '%' || '%%';
  let strLastname = '%' + req.body.lastname + '%' || '%%';
  let strOrderBy = req.body.orderBy || 'student.studentId';
  let intDataSet = req.body.dataSet || 0;

  let strSqlStatement = "SELECT * FROM hogwarts.student WHERE student.firstname LIKE ? AND student.lastname LIKE ? ORDER BY " + strOrderBy + " ASC LIMIT ?,10";
  let arrInserts = [strFirstname, strLastname, intDataSet];
  aMasterAccessor.query(strSqlStatement, arrInserts, function (error, results, fields) {
    if (error) {
      console.log("Fehler beim Ausführen des Statements: " + error);
      return res.status(500).send("Fehler beim Laden der Schüler!");
    } else {
      return res.status(200).send({"data": results});
    }
  });
});

router.post('/totalnumberofstudents', function(req, res) {
  let strFirstname = '%' + req.body.firstname + '%' || '%%';
  let strLastname = '%' + req.body.lastname + '%' || '%%';

  let strSqlStatement = "SELECT COUNT(*) as 'total_number_of_students' FROM hogwarts.student WHERE student.firstname LIKE ? AND student.lastname LIKE ?";
  let arrInserts = [strFirstname, strLastname];
  aMasterAccessor.query(strSqlStatement, arrInserts, function (error, results, fields) {
    if (error) {
      console.log("Fehler beim Ausführen des Statements: " + error);
      return res.status(500).send("Fehler beim Laden der gesamten Schüleranzahl!");
    } else {
      return res.status(200).send({"data": results});
    }
  });
});

router.post('/editstudent', function(req, res) {
  let intStudentId = req.body.studentId || 0;
  let strFirstname = req.body.firstname || '';
  let strLastname = req.body.lastname || '';
  let strGender = req.body.gender || '';
  let strHouse = req.body.house || '';
  let strBloodstatus = req.body.bloodstatus || '';
  let dateBirthday = req.body.birthday || '';
  let dateOfEnrollment = req.body.date_of_enrollment || '';
  let dateOfLeaving = req.body.date_of_leaving || '';
  let strDiploma = req.body.diploma || '';
  let strSqlStatement = "UPDATE hogwarts.student SET student.firstname = ?, student.lastname = ?, student.gender = ?, student.house = ?, " +
      "student.bloodstatus = ?, student.birthday = ?, student.date_of_enrollment = ?, student.date_of_leaving = ?, student.diploma = ? WHERE student.studentId = ?";
  let arrInserts = [strFirstname, strLastname, strGender, strHouse, strBloodstatus, dateBirthday, dateOfEnrollment, dateOfLeaving, strDiploma, intStudentId];
  aMasterAccessor.query(strSqlStatement, arrInserts, function (error, results, fields) {
    if(error) {
      console.log("Fehler beim Ausführen des Statements: " + error);
      return res.status(500).send("Fehler beim Bearbeiten der Daten!");
    } else {
      console.log("Schüler erfolgreich bearbeitet!");
      return res.status(200);
    }
  });
});

router.post('/addstudent', function(req, res) {
  let strFirstname = req.body.firstname || '';
  let strLastname = req.body.lastname || '';
  let strGender = req.body.gender || '';
  let strHouse = req.body.house || '';
  let strBloodstatus = req.body.bloodstatus || '';
  let dateBirthday = req.body.birthday || '';
  let dateOfEnrollment = req.body.date_of_enrollment || '';
  let dateOfLeaving = req.body.date_of_leaving || '';
  let strDiploma = req.body.diploma || '';
  let strSqlStatement = "INSERT INTO hogwarts.student (studentId, firstname, lastname, gender, house, " +
      "bloodstatus, birthday, date_of_enrollment, date_of_leaving, diploma) VALUES (null, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
  let arrInserts = [strFirstname, strLastname, strGender, strHouse, strBloodstatus, dateBirthday, dateOfEnrollment, dateOfLeaving, strDiploma];
  aMasterAccessor.query(strSqlStatement, arrInserts, function(error, results, fields) {
    if(error) {
      console.log("Fehler beim Ausführen des Statements: " + error);
      return res.status(500).send("Fehler beim Einfügen der Schüler!");
    } else {
      console.log("Schüler erfolgreich eingefügt!");
      return res.status(200);
    }
  });
});

module.exports = router;