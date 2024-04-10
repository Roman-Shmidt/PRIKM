import { Component } from '@angular/core';
import { GeneralLogicService } from 'src/app/Services/GeneralLogicService/general-logic.service';

@Component({
  selector: 'main-page-top',
  templateUrl: './main-page-top.component.html',
  styleUrls: ['./main-page-top.component.scss']
})
export class MainPageTopComponent {
  constructor(public generalLogicService: GeneralLogicService){

  }

  onHelpClick(): void 
  {
    console.log("Help clicked");
    this.generalLogicService.openHelp({ isRestaurantUser: false, isClientUser: true });
    console.log("Help clicked2");
  }

  onClientReservationsQueueClick(): void
  {
    console.log("Client Res");
    const clientId = 1;
    this.generalLogicService.readOwnReservationsQueues(clientId);
    console.log("Client Res2");
  }
}
