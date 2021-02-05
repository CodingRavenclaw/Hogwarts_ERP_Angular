import { Component, Input, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { DbaccessstudentsService } from '../backendServices/dbaccessstudents.service';
import { DbaccesshousesService } from '../backendServices/dbaccesshouses.service';
import {DbaccessbloodstatusService} from "../backendServices/dbaccessbloodstatus.service";

@Component({
  selector: 'app-editstudent',
  templateUrl: './editstudent.component.html',
  styleUrls: ['./editstudent.component.scss']
})
export class EditstudentComponent implements OnInit {

  strTitle: string | any;
  arrData: any[] = [];
  arrHouses: any[] = [];
  arrBloodstatus: any[] = [];
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

  constructor(public modalRef: BsModalRef, private aDBAccessStudentsService: DbaccessstudentsService, private aDBAccessHousesService: DbaccesshousesService,
              private aDBAccessBloodstatusService: DbaccessbloodstatusService) { }

  ngOnInit(): void {
    this.intStudentId = this.arrData[0];
    this.strFirstname = this.arrData[1];
    this.strLastname = this.arrData[2];
    this.dateBirthday = this.arrData[6];
    this.dateOfEnrollment = this.arrData[7];
    this.dateOfLeaving = this.arrData[8];

    this.aDBAccessHousesService.getAllHouses().subscribe(
      (res: any) => {
        this.arrHouses = res.data;
        for (const aHouse of this.arrHouses) {
          if (aHouse.abbreviation === this.arrData[4]) {
            this.strHouse = aHouse.abbreviation;
            const intIndex = this.arrHouses.indexOf(aHouse);
            this.strHouseToTop = aHouse;
            this.arrHouses.splice(intIndex, 1);
            this.arrHouses.unshift(aHouse);
          }
        }
    }, (error: any) => {
      console.log('Fehler beim Laden der Häuser: ' + error);
    });

    // Check genders
    if (this.arrData[3] === 'f') {
      this.strGender = 'f';
    } else {
      this.strGender = 'm';
    }

    // Check bloodstatus
    this.aDBAccessBloodstatusService.getAllBloodstatus().subscribe((res: any) => {
      this.arrBloodstatus = res.data;
      for (const aBloodstatus of this.arrBloodstatus) {
        aBloodstatus.denotation = aBloodstatus.denotation.replace(/\s/g, '');
        if (aBloodstatus.abbreviation === this.arrData[5]) {
          this.strBloodstatus = aBloodstatus.abbreviation;
        }
      }
    }, (error: any) => {
      console.log('Fehler beim Laden der Blutsstati: ' + error);
    });

    // ! Take a look for a dynamic solution!
    // Check diplomas
    if (this.arrData[9] === 'ND') {
      this.strDiploma = 'ND';
    } else if (this.arrData[9] === 'OWL') {
      this.strDiploma = 'OWL';
    } else if (this.arrData[9] === 'NEWT') {
      this.strDiploma = 'NEWT';
    } else if (this.arrData[9] === 'NDY') {
      this.strDiploma = 'NDY';
    } else if (this.arrData[9] === 'SE') {
      this.strDiploma = 'SE';
    } else if (this.arrData[9] === 'E') {
      this.strDiploma = 'E';
    }

  }

  selected(event: any): void {
    for (const aHouse of this.arrHouses) {
      if (aHouse.denotation === event.target.value) {
        this.strHouse = aHouse.abbreviation;
      }
    }
  }

  editStudent(): void {
    this.aDBAccessStudentsService.editStudent(this.intStudentId, this.strFirstname, this.strLastname, this.strGender,
      this.strHouse, this.strBloodstatus, this.dateBirthday, this.dateOfEnrollment, this.dateOfLeaving, this.strDiploma).subscribe((res: any) => {
        this.modalRef.hide();
        this.ngOnInit();
    }, (error: any) => {
        console.log('Fehler beim Bearbeiten des Schülers: ' + error);
      }
    );
  }

}
