import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Car } from 'src/app/models/car';
import { Rental } from 'src/app/models/rental';
import { CarrentalService } from 'src/app/services/carrental.service';

@Component({
  selector: 'app-carrental',
  templateUrl: './carrental.component.html',
  styleUrls: ['./carrental.component.css']
})
export class CarrentalComponent implements OnInit {

  car:Car;

  constructor(private carrentalService:CarrentalService,
              private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if(params["carId"]){
        this.getCarDetailById(params["carId"])
      }
    })
  }

  getCarDetailById(carId:number){
    this.carrentalService.getCarDetail(carId).subscribe(response=>{
    this.car.brandName=response.brandName
    this.car.colorName=response.colorName
    this.car.dailyPrice=response.dailyPrice
    })
  }
}
