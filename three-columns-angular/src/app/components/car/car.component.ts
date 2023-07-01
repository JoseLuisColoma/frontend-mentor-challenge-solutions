import { Component, Input } from '@angular/core';
import {Car} from '../../Models/Car'

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.scss']
})
export class CarComponent {
  @Input() car!: Car
}
