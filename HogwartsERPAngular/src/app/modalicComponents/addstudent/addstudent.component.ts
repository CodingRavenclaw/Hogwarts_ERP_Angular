import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { DbaccessstudentsService } from '../../backendServices/dbaccessstudents.service';
import { DbaccessbloodstatusService } from '../../backendServices/dbaccessbloodstatus.service';
import { DbaccesshousesService } from '../../backendServices/dbaccesshouses.service';
import { DbaccessdiplomasService } from '../../backendServices/dbaccessdiplomas.service';

@Component({
  selector: 'app-addstudent',
  templateUrl: './addstudent.component.html',
  styleUrls: ['./addstudent.component.scss']
})
export class AddstudentComponent implements OnInit {

  public strTitle = '';

  public strFirstname = '';
  public strLastname = '';
  public strGender = '';
  public strHouse = '';
  public strBloodstatus = '';
  public dateBirthday = '';
  public dateOfEnrollment = '';
  public dateOfLeaving = '';
  public strDiploma = '';

  public arrBloodstatus: any[] = [];
  public arrHouses: any[] = [];
  public arrDiplomas: any[] = [];

  constructor(public aModalRef: BsModalRef, private aDBAccessStudentsService: DbaccessstudentsService,
              private aDBAccessBloodstatusService: DbaccessbloodstatusService, private aDBAccessHouseService: DbaccesshousesService,
              private aDBAccessDiplomasService: DbaccessdiplomasService) { }

  ngOnInit(): void {
    this.aDBAccessBloodstatusService.getAllBloodstatus().subscribe(
      (res: any) => {
        this.arrBloodstatus = res.data;
      }, (error: any) => {
        console.error('Fehler beim Laden der Blutsstati!');
      });

    this.aDBAccessHouseService.getAllHouses().subscribe(
      (res: any) => {
        this.arrHouses = res.data;
        this.strHouse = this.arrHouses[0].abbreviation;
      }, (error: any) => {
        console.error('Fehler beim Laden der Häuser!');
      });

    this.aDBAccessDiplomasService.getAllDiplomas().subscribe(
      (res: any) => {
        this.arrDiplomas = res.data;
      }, (error: any) => {
        console.error('Fehler beim Laden der Abschlüsse!');
      });
  }

  changeHouse(event: any): void {
    for (const aHouse of this.arrHouses) {
      if (aHouse.denotation === event.target.value) {
        this.strHouse = aHouse.abbreviation;
      }
    }
  }

  addStudent(): void {
    if (this.strFirstname === '' || this.strLastname === '' || this.strGender === '' || this.strHouse === '' ||
      this.strBloodstatus === '' || this.dateBirthday === '' || this.dateOfEnrollment === '' || this.strDiploma === '') {
      console.error('Bitte alle Felder ausfüllen!');
    } else {
      if (this.dateOfLeaving === '' || this.dateOfLeaving === '1000-01-01') {
        this.dateOfLeaving = '0000-00-00';
      }
      this.aDBAccessStudentsService.addStudent(this.strFirstname, this.strLastname, this.strGender, this.strHouse, this.strBloodstatus,
        this.dateBirthday, this.dateOfEnrollment, this.dateOfLeaving, this.strDiploma).subscribe(
        (res: any) => {

        }, (error: any) => {
          console.error('Fehler beim Hinzufügen des Schülers!');
        }
      );
      this.aModalRef.hide();
    }

  }

}
