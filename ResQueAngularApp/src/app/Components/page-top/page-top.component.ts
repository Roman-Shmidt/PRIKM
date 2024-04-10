import { Component, Input } from '@angular/core';
import { GeneralLogicService } from 'src/app/Services/GeneralLogicService/general-logic.service';

@Component({
  selector: 'app-page-top',
  templateUrl: './page-top.component.html',
  styleUrls: ['./page-top.component.scss']
})
export class PageTopComponent {
  @Input() clientId: number = 0;

  constructor(public generalLogicService: GeneralLogicService){

  }
  
  onHelpClick(): void 
  {
    this.generalLogicService.openHelp({ isRestaurantUser: false, isClientUser: true });
  }

  onClientReservationsClick(): void
  {
    this.generalLogicService.readOwnReservationsQueues(this.clientId);
  }

  onClientQueueClick(): void
  {
    this.generalLogicService.readOwnQueue(this.clientId);
  }
}
