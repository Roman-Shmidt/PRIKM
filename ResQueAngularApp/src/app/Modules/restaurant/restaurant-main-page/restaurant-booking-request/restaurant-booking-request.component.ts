import { DataSource } from '@angular/cdk/table';
import { Component, Input } from '@angular/core';
import { Observable, ReplaySubject, switchMap } from 'rxjs';
import { booking } from 'src/app/Models/Booking';
import { RestaurantBookingService } from '../../resturant-services/restaurant-booking.service';
import { GeneralLogicService } from 'src/app/Services/GeneralLogicService/general-logic.service';

@Component({
  selector: 'restaurant-booking-request',
  templateUrl: './restaurant-booking-request.component.html',
  styleUrls: ['./restaurant-booking-request.component.scss']
})
export class RestaurantBookingRequestComponent {
  @Input() tableTitle: string = "Booking";
  @Input() dataToDisplay: booking[] = [];
  @Input() dataSource: ExampleDataSource = new ExampleDataSource(this.dataToDisplay);

  @Input() restaurantId: number = 0;

  displayedColumns: string[] = ['clientId', 'name', 'dateAndTime', 'companySize', 'description', 'actions'];

  deleteReservation(number: number) {
    this.reservationsService.deleteReservation(number)
      .pipe(
        switchMap(() => this.reservationsService.getReservations("RestaurantId", this.restaurantId, 1))
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

  updatedValues: Record<string, any> = {};

  onApproveClick(reservationId: number) 
  {
    this.generalLogicService.closeDialog();
    
    this.updatedValues["IsReservationApproved"] = true;

    this.reservationsService.updateReservation(
      reservationId,
      this.updatedValues
    )
    .subscribe({
      next: (response) => {
        console.log(response);
      },
      error: (error) => {
        console.error(error);
      }
    });
    console.info("Success");
  }

  constructor(private reservationsService: RestaurantBookingService,
    private generalLogicService: GeneralLogicService)
  {

  }
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
