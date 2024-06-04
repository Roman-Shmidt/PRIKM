import { DataSource } from '@angular/cdk/table';
import { Component, Input } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';
import { booking } from 'src/app/Models/Booking';

@Component({
  selector: 'restaurant-booking-history',
  templateUrl: './restaurant-booking-history.component.html',
  styleUrls: ['./restaurant-booking-history.component.scss']
})
export class RestaurantBookingHistoryComponent {
  @Input() tableTitle: string = "Booking";
  @Input() dataToDisplay: booking[] = [];
  @Input() dataSource: ExampleDataSource = new ExampleDataSource(this.dataToDisplay);

  displayedColumns: string[] = ['clientId', 'name', 'dateAndTime', 'companySize', 'description'];
}

class ExampleDataSource extends DataSource<booking> {
  private _dataStream = new ReplaySubject<booking[]>();

  constructor(initialData: booking[]) {
    super();
    this.setData(initialData);
  }

  connect(): Observable<booking[]> {
    return this._dataStream;
  }

  disconnect() {}

  setData(data: booking[]) {
    this._dataStream.next(data);
  }
}
