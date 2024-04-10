import { Component, Input } from '@angular/core';
import { queue } from 'src/app/Models/Queue';
import { Observable, ReplaySubject, switchMap } from 'rxjs';
import { DataSource } from '@angular/cdk/table';
import { RestaurantQueueService } from '../../resturant-services/restaurant-queue.service';

@Component({
  selector: 'restaurant-queue',
  templateUrl: './restaurant-queue.component.html',
  styleUrls: ['./restaurant-queue.component.scss']
})
export class RestaurantQueueComponent {
  @Input() tableTitle: string = "Queue";
  @Input() dataToDisplay: queue[] = [];
  @Input() dataSource: ExampleDataSource = new ExampleDataSource(this.dataToDisplay);

  @Input() restaurantId: number = 0;

  displayedColumns: string[] = ['placeInQueue', 'clientId', 'companySize', 'actions'];

  deleteQueue(number: number) {
    this.queueService.deleteQueue(number)
    .pipe(
      switchMap(() => this.queueService.getQueues("RestaurantId", this.restaurantId, 1))
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

  constructor(private queueService: RestaurantQueueService) 
  {

  }
}

class ExampleDataSource extends DataSource<queue> {
  private _dataStream = new ReplaySubject<queue[]>();

  constructor(initialData: queue[]) {
    super();
    this.setData(initialData);
  }

  connect(): Observable<queue[]> {
    return this._dataStream;
  }

  disconnect() {}

  setData(data: queue[]) {
    this._dataStream.next(data);
  }
}
