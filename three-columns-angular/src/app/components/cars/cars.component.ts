import { Component } from '@angular/core';
import {Car} from '../../Models/Car'
import {CARS} from '../../Services/mock-data'


@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss']
})
export class CarsComponent {
  cars: Car [] = CARS
}
