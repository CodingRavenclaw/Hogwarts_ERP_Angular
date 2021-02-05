import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DbaccessdiplomasService {

  strRouteToAllDiplomas = 'http://localhost:3000/diplomas';

  constructor(private aHttpClient: HttpClient) { }

  getAllDiplomas(): any {
    return this.aHttpClient.get(this.strRouteToAllDiplomas);
  }

}
