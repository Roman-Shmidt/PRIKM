import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { menu } from 'src/app/Models/Menu';
import { RestaurantMenuService } from 'src/app/Modules/restaurant/resturant-services/restaurant-menu.service';
import { GeneralLogicService } from 'src/app/Services/GeneralLogicService/general-logic.service';

@Component({
  selector: 'app-update-menu',
  templateUrl: './update-menu.component.html',
  styleUrls: ['./update-menu.component.scss']
})
export class UpdateMenuComponent {
  name: string = "";
  photoUrl: string = "";
  
  updatedValues: Record<string, any> = {};

  constructor(@Inject(MAT_DIALOG_DATA) public data: menu,
    private generalLogicService: GeneralLogicService,
    private menuService: RestaurantMenuService) 
  {
    this.name = data.name;
    this.photoUrl = data.photoUrl;
  }

  onOkClick() 
  {
    this.generalLogicService.closeDialog();
    
    this.updatedValues["Name"] = this.name;
    this.updatedValues["PhotoUrl"] = this.photoUrl;

    this.menuService.updateMenu(
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
