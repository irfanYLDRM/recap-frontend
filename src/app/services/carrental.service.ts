import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from '../models/car';
import { Rental } from '../models/rental';

@Injectable({
  providedIn: 'root'
})
export class CarrentalService {

  apiUrl= "https://localhost:44352/api/cars"

  constructor(private httpClient:HttpClient) { }

  getCarDetail(carId:number):Observable<Car>{
    let newPath = this.apiUrl + "/getbyid?=id"+ carId
    return this.httpClient.get<Car>(newPath)
  }
}
