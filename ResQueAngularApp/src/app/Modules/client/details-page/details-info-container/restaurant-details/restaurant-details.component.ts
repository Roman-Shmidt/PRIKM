import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { restaurant } from 'src/app/Models/Restaurant';
import { GeneralLogicService } from 'src/app/Services/GeneralLogicService/general-logic.service';

@Component({
  selector: 'restaurant-details',
  templateUrl: './restaurant-details.component.html',
  styleUrls: ['./restaurant-details.component.scss']
})
export class RestaurantDetailsComponent {
  @Input() restaurant: restaurant = 
  new restaurant(
    1,
    false, 
    false, 
    "Missing info", 
    "", 
    "Missing name", 
    "No address info", 
    0, 
    new Date(), 
    new Date(),
    "",
    0,
    0);

constructor(private generalLogicService: GeneralLogicService,
  private router: Router)
{}
}
