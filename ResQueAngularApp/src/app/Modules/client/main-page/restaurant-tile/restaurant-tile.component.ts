import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { restaurant } from 'src/app/Models/Restaurant';
import { GeneralLogicService } from 'src/app/Services/GeneralLogicService/general-logic.service';

@Component({
  selector: 'restaurant-tile',
  templateUrl: './restaurant-tile.component.html',
  styleUrls: ['./restaurant-tile.component.scss']
})
export class RestaurantTileComponent {
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

  goToPage(pageName: string, id: number): void {
    this.router.navigate([`${pageName}/${id}`]);
  }

  takeQueue(): void{
    this.generalLogicService.takeQueue("PUT HERE RESTAURANT");
  }
}
