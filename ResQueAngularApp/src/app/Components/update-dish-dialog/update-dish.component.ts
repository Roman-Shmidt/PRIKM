import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { dish } from 'src/app/Models/Dish';
import { RestaurantDishService } from 'src/app/Modules/restaurant/resturant-services/restaurant-dish.service';
import { GeneralLogicService } from 'src/app/Services/GeneralLogicService/general-logic.service';

@Component({
  selector: 'app-update-dish',
  templateUrl: './update-dish.component.html',
  styleUrls: ['./update-dish.component.scss']
})
export class UpdateDishComponent {
  name: string = "";
  description: string = "";
  photoUrl: string = "";
  price: number = 0;
  menuId: number = 0;
  
  updatedValues: Record<string, any> = {};

  constructor(@Inject(MAT_DIALOG_DATA) public data: dish,
    private generalLogicService: GeneralLogicService,
    private dishService: RestaurantDishService) 
  {
    this.name = data.name;
    this.description = data.description;
    this.photoUrl = data.photoUrl;
    this.price = data.price;
    this.menuId = data.menuId;
  }

  onOkClick() 
  {
    this.generalLogicService.closeDialog();
    
    this.updatedValues["Name"] = this.name;
    this.updatedValues["PhotoUrl"] = this.photoUrl;
    this.updatedValues["Description"] = this.description;
    this.updatedValues["MenuId"] = this.menuId;
    this.updatedValues["Price"] = this.price;

    this.dishService.updateDish(
      this.data.id,
      this.updatedValues
    ).subscribe({
      next: (response) => {
        console.log(response);
      },
      error: (error) => {
        console.error(error);
      }
    });
    console.info("Success");
  }

  onValueChangedd() {
    console.log(this.name + ": " + this.photoUrl);
  }

  onCancelClick() {
    this.generalLogicService.closeDialog();
    console.info("Cancel Clicked");
    return;
  }
}
