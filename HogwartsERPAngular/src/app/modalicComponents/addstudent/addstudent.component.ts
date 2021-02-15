import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
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

  constructor(public aModalRef: BsModalRef, private aDBAccessBloodstatusService: DbaccessbloodstatusService, private aDBAccessHouseService: DbaccesshousesService,
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

  selected(event: any): void {

  }

  addStudent(): void {

  }

}
