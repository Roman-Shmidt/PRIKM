import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { restaurant } from 'src/app/Models/Restaurant';
import { GeneralLogicService } from 'src/app/Services/GeneralLogicService/general-logic.service';
@Component({
  selector: 'restaurant-status',
  templateUrl: './restaurant-status.component.html',
  styleUrls: ['./restaurant-status.component.scss']
})
export class RestaurantStatusComponent {
  public dialog: MatDialog;
  @Input() restaurant: restaurant;

  makeBooking() {
    this.generalLogicService.makeBooking(this.restaurant);
  }

  takeQueue() {
    this.generalLogicService.takeQueue(this.restaurant);
  }

  constructor(dialog: MatDialog, private generalLogicService: GeneralLogicService) 
  {
    this.dialog = dialog;

    this.restaurant = new restaurant(
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
  }
}
