export class Student {

  private _intStudentId: number;
  private _strFirstname: string;
  private _strLastname: string;
  private _chrGender: string;
  private _strHouse: string;
  private _strBloodstatus: string;
  private _strBirthday: string;
  private _strDateOfEnrollment: string;
  private _strDateOfLeaving: string;
  private _strDiploma: string;

  constructor(intStudentId: number, strFirstname: string, strLastname: string, chrGender: string, strHouse: string, strBloodstatus: string, strBirthday: string, strDateOfEnrollment: string, strDateOfLeaving: string, strDiploma: string) {
    this._intStudentId = intStudentId;
    this._strFirstname = strFirstname;
    this._strLastname = strLastname;
    this._chrGender = chrGender;
    this._strHouse = strHouse;
    this._strBloodstatus = strBloodstatus;
    this._strBirthday = strBirthday;
    this._strDateOfEnrollment = strDateOfEnrollment;
    this._strDateOfLeaving = strDateOfLeaving;
    this._strDiploma = strDiploma;
  }

  get intStudentId(): number {
    return this._intStudentId;
  }

  set intStudentId(value: number) {
    this._intStudentId = value;
  }

  get strFirstname(): string {
    return this._strFirstname;
  }

  set strFirstname(value: string) {
    this._strFirstname = value;
  }

  get strLastname(): string {
    return this._strLastname;
  }

  set strLastname(value: string) {
    this._strLastname = value;
  }

  get chrGender(): string {
    return this._chrGender;
  }

  set chrGender(value: string) {
    this._chrGender = value;
  }

  get strHouse(): string {
    return this._strHouse;
  }

  set strHouse(value: string) {
    this._strHouse = value;
  }

  get strBloodstatus(): string {
    return this._strBloodstatus;
  }

  set strBloodstatus(value: string) {
    this._strBloodstatus = value;
  }

  get strBirthday(): string {
    return this._strBirthday;
  }

  set strBirthday(value: string) {
    this._strBirthday = value;
  }

  get strDateOfEnrollment(): string {
    return this._strDateOfEnrollment;
  }

  set strDateOfEnrollment(value: string) {
    this._strDateOfEnrollment = value;
  }

  get strDateOfLeaving(): string {
    return this._strDateOfLeaving;
  }

  set strDateOfLeaving(value: string) {
    this._strDateOfLeaving = value;
  }

  get strDiploma(): string {
    return this._strDiploma;
  }

  set strDiploma(value: string) {
    this._strDiploma = value;
  }

}
