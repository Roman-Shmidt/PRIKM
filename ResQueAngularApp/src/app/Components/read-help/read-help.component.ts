import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { GeneralLogicService } from 'src/app/Services/GeneralLogicService/general-logic.service';

@Component({
  selector: 'app-read-help',
  templateUrl: './read-help.component.html',
  styleUrls: ['./read-help.component.scss']
})
export class ReadHelpComponent {
  isRestaurant: boolean = false;
  isClient: boolean = false;

  constructor(@Inject(MAT_DIALOG_DATA) public data: { isRestaurantUser: boolean, isClientUser: boolean },
  private generalLogicService: GeneralLogicService)
  {
    this.isRestaurant = data.isRestaurantUser;
    this.isClient= data.isClientUser;
  }

  onOkClick() {
    this.generalLogicService.closeDialog();
    console.info("Ok Clicked");
    return;
  }
}
