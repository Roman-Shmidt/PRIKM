import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { queue } from 'src/app/Models/Queue';
import { restaurant } from 'src/app/Models/Restaurant';
import { ClientQueueService } from 'src/app/Modules/client/client-services/client-queue.service';
import { GeneralLogicService } from 'src/app/Services/GeneralLogicService/general-logic.service';

@Component({
  selector: 'app-take-queue-dialog',
  templateUrl: './take-queue-dialog.component.html',
  styleUrls: ['./take-queue-dialog.component.scss']
})
export class TakeQueueDialogComponent {
  public queue: queue = new queue(0,
    new Date(),
    1,
    this.data.id,
    1,
    1);

  constructor(@Inject(MAT_DIALOG_DATA) public data: restaurant,
  private generalLogicService: GeneralLogicService,
  private clientQueueService: ClientQueueService) {}

  onOkClick() {
    this.clientQueueService.createQueue(this.queue).subscribe({
      next: (response) => {
        console.log(response);
      },
      error: (error) => {
        console.error(error);
      }
    });
    this.generalLogicService.closeDialog();
    return;
  }

  onCancelClick() {
    this.generalLogicService.closeDialog();
    return;
  }
}
