import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Student } from '../objects/Student';



@Injectable({
  providedIn: 'root'
})

export class DbaccessstudentsService {

  strUrlToSelectStudents = 'http://localhost:3000/students';
  strUrlToGetTotalNumberOfStudents = 'http://localhost:3000/totalnumberofstudents';
  strUrlToEditStudent = 'http://localhost:3000/editstudent';

  constructor(
    private aHttpClient: HttpClient
  ) { }

  getStudents(strAFirstName: string, strALastName: string, strAnOrder: string, intADataSet: number): any {
    return this.aHttpClient.post(this.strUrlToSelectStudents, {
      firstname: strAFirstName,
      lastname: strALastName,
      orderBy: strAnOrder,
      dataSet: intADataSet
    });
  }

  getTotalNumberOfStudents(strFirstname: string, strLastname: string): any {
    return this.aHttpClient.post(this.strUrlToGetTotalNumberOfStudents, {
      firstname: strFirstname,
      lastname: strLastname
    });
  }

  // TODO: Write a new function to insert new students
  addStudent(strAFirstname: string, strALastname: string, strAGender: string, strAHouse: string,
             strABloodstatus: string, dateABirthday: string, dateADateOfEnrollment: string, dateADateOfLeaving: string, strADiploma: string): any {
    // Add a new student...
  }

  editStudent(intAStudentId: number, strAFirstname: string, strALastname: string, strAGender: string, strAHouse: string,
              strABloodstatus: string, dateABirthday: string, dateADateOfEnrollment: string, dateADateOfLeaving: string, strADiploma: string): any {
    return this.aHttpClient.post(this.strUrlToEditStudent, {
      studentId: intAStudentId,
      firstname: strAFirstname,
      lastname: strALastname,
      gender: strAGender,
      house: strAHouse,
      bloodstatus: strABloodstatus,
      birthday: dateABirthday,
      date_of_enrollment: dateADateOfEnrollment,
      date_of_leaving: dateADateOfLeaving,
      diploma: strADiploma
    });
  }

}
