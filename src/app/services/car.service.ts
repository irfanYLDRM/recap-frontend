import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Car } from '../models/car';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  apiUrl = "https://localhost:44352/api/cars"

  constructor(private httpClient:HttpClient) { }

  getCars():Observable<ListResponseModel<Car>>{
    let newPath = this.apiUrl + "/getcarsdetailsdto"
    return this.httpClient.get<ListResponseModel<Car>>(newPath)
  }

  getCarByColor(colorId:number):Observable<ListResponseModel<Car>>{
    let newPath=this.apiUrl + "/getcardetailbycolor?id=" + colorId
    return this.httpClient.get<ListResponseModel<Car>>(newPath)
  }

  getCarsByBrand(brandId:number):Observable<ListResponseModel<Car>>{
    let newPath = this.apiUrl + "/getcardetailbybrand?id=" + brandId
    return this.httpClient.get<ListResponseModel<Car>>(newPath)
  }
}
