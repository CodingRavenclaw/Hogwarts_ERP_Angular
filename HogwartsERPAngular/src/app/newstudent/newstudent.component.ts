import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { DbaccessstudentsService } from '../backendServices/dbaccessstudents.service';
import { DbaccesshousesService } from '../backendServices/dbaccesshouses.service';

@Component({
  selector: 'app-newstudent',
  templateUrl: './newstudent.component.html',
  styleUrls: ['./newstudent.component.scss']
})
export class NewstudentComponent implements OnInit {

  strTitle: string | any;
  arrData: any[] = [];
  arrHouses: any[] = [];
  intStudentId = 0;
  strFirstname = '';
  strLastname = '';
  strGender = '';
  strHouse = '';
  strHouseToTop = '';
  strSelectedHouse = '';
  strBloodstatus = '';
  dateBirthday = '';
  dateOfEnrollment = '';
  dateOfLeaving = '';
  strDiploma = '';

  constructor(public modalRef: BsModalRef, private aDBAccessStudentsService: DbaccessstudentsService, private aDBAccessHousesService: DbaccesshousesService) { }

  ngOnInit(): void {

    this.aDBAccessHousesService.getAllHouses().subscribe(
      (res: any) => {
       this.arrHouses = res.data;
      }, (error: any) => {
        console.log('Fehler beim Laden der Häuser: ' + error);
      });

  }

  addNewStudent(): void {

  }

}