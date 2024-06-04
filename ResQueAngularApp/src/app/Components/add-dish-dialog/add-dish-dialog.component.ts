import { Component } from '@angular/core';
import { dish } from 'src/app/Models/Dish';
import { RestaurantDishService } from 'src/app/Modules/restaurant/resturant-services/restaurant-dish.service';
import { GeneralLogicService } from 'src/app/Services/GeneralLogicService/general-logic.service';

@Component({
  selector: 'app-add-dish-dialog',
  templateUrl: './add-dish-dialog.component.html',
  styleUrls: ['./add-dish-dialog.component.scss']
})
export class AddDishDialogComponent {

  name: string = "";
  description: string = "";
  photoUrl: string = "";
  price: number = 0;
  menuId: number = 0;

  constructor(private generalLogicService: GeneralLogicService,
    private dishService: RestaurantDishService) 
  {
  }

  onCancelClick() {
    this.generalLogicService.closeDialog();
    console.info("Cancel Clicked");
    return;
  }

  onOkClick() 
  {
    this.generalLogicService.closeDialog();

    this.dishService.createDish(
      new dish(0,
        this.name,
        this.photoUrl,
        this.description,
        this.price,
        this.menuId,
        null
      )
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

  onValueChanged(value: any, field: string) {
    console.log(value + ": " + field);
    switch (field) {
      case "name": 
        this.name = value;
        break;
      case "photoUrl": 
        this.photoUrl = value;
        break;
      case "description": 
        this.description = value;
        break;
      case "price": 
        this.price = value;
        break;
      default:
        this.menuId = value;
    };  
  }

  onValueChangedd() {
    console.log(this.name + ": " + this.photoUrl + ": " + this.description + ": " + this.price + ": " + this.menuId);
  }
}
