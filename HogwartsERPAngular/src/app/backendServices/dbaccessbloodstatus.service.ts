import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DbaccessbloodstatusService {

  strRouteToGetAllBloodstatus = 'http://localhost:3000/bloodstatus';

  constructor(private aHttpClient: HttpClient) { }

  getAllBloodstatus(): any {
    return this.aHttpClient.get(this.strRouteToGetAllBloodstatus);
  }

}
