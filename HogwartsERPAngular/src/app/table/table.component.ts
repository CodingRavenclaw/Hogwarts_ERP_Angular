import { Component, OnInit } from '@angular/core';
import { DbaccessstudentsService } from '../backendServices/dbaccessstudents.service';
import { BsModalRef, BsModalService} from 'ngx-bootstrap/modal';
import { EditstudentComponent } from '../editstudent/editstudent.component';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  modalRef: BsModalRef | any;
  constructor(private aDbAccessService: DbaccessstudentsService, private aModalService: BsModalService) {

  }

  arrayStudents: any = [];
  arrayStudentToEdit: any = [];
  intNumberOfStudents = 0;
  intTotalNumberOfStudents = 0;

  intDataSet = 0;
  intDataLimit = 10;
  strOrderBy = 'student.studentId';

  strFirstname = '';
  strLastname = '';

  ngOnInit(): void {
    this.getTotalNumberOfStudents();
    this.loadStudents();
  }

  getTotalNumberOfStudents(): void {
    this.aDbAccessService.getTotalNumberOfStudents(this.strFirstname, this.strLastname).subscribe((res: any) => {
      this.intTotalNumberOfStudents = res.data[0].total_number_of_students;
    });
  }

  loadStudents(): void {
    this.aDbAccessService.getStudents(this.strFirstname, this.strLastname, this.strOrderBy, this.intDataSet).subscribe((res: any) => {
      this.arrayStudents = res.data;
    });
  }

  pageChanged(event: any): void {
    this.intDataSet = (event.page - 1) * this.intDataLimit;
    this.loadStudents();
  }

  editStudent(aStudent: any): void {
    const intStudentId = aStudent.studentId;
    const strFirstname = aStudent.firstname;
    const strLastname = aStudent.lastname;
    const strGender = aStudent.gender;
    const strHouse = aStudent.house;
    const strBloodstatus = aStudent.bloodstatus;
    const strBirthday = aStudent.birthday;
    const strDateOfEnrollment = aStudent.date_of_enrollment;
    const strDateOfLeaving = aStudent.date_of_leaving;
    const strDiploma = aStudent.diploma;
    this.arrayStudentToEdit = [];
    this.arrayStudentToEdit.push(intStudentId, strFirstname, strLastname, strGender, strHouse, strBloodstatus, strBirthday, strDateOfEnrollment, strDateOfLeaving, strDiploma);
    this.modalRef = this.aModalService.show(EditstudentComponent, {class: 'modal-xl', initialState: {
        strTitle: 'Schüler bearbeiten',
        arrData: this.arrayStudentToEdit
      }});
  }

  orderByStudentId(): void {
    this.strOrderBy = 'student.studentId';
    this.loadStudents();
  }

  orderByFirstname(): void {
    this.strOrderBy = 'student.firstname';
    this.loadStudents();
  }

  orderByLastname(): void {
    this.strOrderBy = 'student.lastname';
    this.loadStudents();
  }

  orderByGender(): void {
    this.strOrderBy = 'student.gender';
    this.loadStudents();
  }

  orderByHouse(): void {
    this.strOrderBy = 'student.house';
    this.loadStudents();
  }

  orderByBloodstatus(): void {
    this.strOrderBy = 'student.bloodstatus';
    this.loadStudents();
  }

  orderByBirthday(): void {
    this.strOrderBy = 'student.birthday';
    this.loadStudents();
  }

  orderByDateOfEnrollment(): void {
    this.strOrderBy = 'student.date_of_enrollment';
    this.loadStudents();
  }

  orderByDateOfLeaving(): void {
    this.strOrderBy = 'student.date_of_leaving';
    this.loadStudents();
  }

  orderByDiploma(): void {
    this.strOrderBy = 'student.diploma';
    this.loadStudents();
  }

}
