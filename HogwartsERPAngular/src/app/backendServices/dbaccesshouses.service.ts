import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DbaccesshousesService {

  strRouteToGetAllHouses = 'http://localhost:3000/houses';

  constructor(private aHttpClient: HttpClient) { }

  getAllHouses(): any {
    return this.aHttpClient.get(this.strRouteToGetAllHouses);
  }

}
