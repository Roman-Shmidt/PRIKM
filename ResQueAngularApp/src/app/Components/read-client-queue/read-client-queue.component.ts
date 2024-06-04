import { Component, Inject, Input } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { switchMap } from 'rxjs';
import { queue } from 'src/app/Models/Queue';
import { RestaurantQueueService } from 'src/app/Modules/restaurant/resturant-services/restaurant-queue.service';
import { GeneralLogicService } from 'src/app/Services/GeneralLogicService/general-logic.service';

@Component({
  selector: 'app-read-client-queue',
  templateUrl: './read-client-queue.component.html',
  styleUrls: ['./read-client-queue.component.scss']
})
export class ReadClientQueueComponent {
  @Input() tableTitle: string = "Queue";
  @Input() dataToDisplay: queue[] = [];

  @Input() clientId: number = 0;

  displayedColumns: string[] = ['placeInQueue', 'clientId', 'companySize', 'actions'];

  deleteQueue(number: number) {
    this.queueService.deleteQueue(number)
      .pipe(
        switchMap(() => this.queueService.getQueues("ClientId", this.clientId, 1))
      )
      .subscribe({
        next: (response) => {
          console.log(response);
          this.dataToDisplay = response.object;
        },
        error: (error) => {
          console.error(error);
        }
      });
  }

  getQueues(id: number) {
    console.log("client id to get" + id);
    this.queueService.getQueues("ClientId", id, 1)
      .subscribe({
        next: (response) => {
          console.log(response);
          this.dataToDisplay = response.object;
        },
        error: (error) => {
          console.error(error);
        }
      });


  }

  onOkClick() {
    this.generalLogicService.closeDialog();
    return;
  }

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
    private queueService: RestaurantQueueService,
    private generalLogicService: GeneralLogicService) {
    this.clientId = this.data;
    this.getQueues(this.clientId);
  }
}
