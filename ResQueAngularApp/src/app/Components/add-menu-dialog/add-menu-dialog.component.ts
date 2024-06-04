import { Component, Inject, Input } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { dish } from 'src/app/Models/Dish';
import { menu } from 'src/app/Models/Menu';
import { restaurant } from 'src/app/Models/Restaurant';
import { RestaurantMenuService } from 'src/app/Modules/restaurant/resturant-services/restaurant-menu.service';
import { GeneralLogicService } from 'src/app/Services/GeneralLogicService/general-logic.service';

@Component({
  selector: 'app-add-menu-dialog',
  templateUrl: './add-menu-dialog.component.html',
  styleUrls: ['./add-menu-dialog.component.scss']
})
export class AddMenuDialogComponent {

  id: number = 0;
  name: string = "";
  photoUrl: string = "";
  restaurantId: number = 0;
  dishes: dish[] = [];
  
  constructor(@Inject(MAT_DIALOG_DATA) public data: restaurant,
    private generalLogicService: GeneralLogicService,
    private menuService: RestaurantMenuService) 
  {
    this.restaurantId = data.id;
  }

  onOkClick() 
  {
    this.generalLogicService.closeDialog();
    
    this.menuService.createMenu(
      new menu( 
        this.id,
        this.restaurantId,
        this.name,
        this.photoUrl,
        this.dishes
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

  onValueChanged(value: string, field: string) {
    console.log(value + ": " + field);
    switch (field) {
      case "menuName": 
        this.name = value;
        break;
      case "photoUrl": 
        this.photoUrl = value;
        break;
    };  
  }

  onValueChangedd() {
    console.log(this.name + ": " + this.photoUrl + ": " + this.restaurantId);
  }

  onCancelClick() {
    this.generalLogicService.closeDialog();
    console.info("Cancel Clicked");
    return;
  }
}
