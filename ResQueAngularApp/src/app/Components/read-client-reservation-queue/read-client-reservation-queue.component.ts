import { Component, Input, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { switchMap } from 'rxjs';
import { booking } from 'src/app/Models/Booking';
import { RestaurantBookingService } from 'src/app/Modules/restaurant/resturant-services/restaurant-booking.service';
import { GeneralLogicService } from 'src/app/Services/GeneralLogicService/general-logic.service';

@Component({
  selector: 'app-read-client-reservation-queue',
  templateUrl: './read-client-reservation-queue.component.html',
  styleUrls: ['./read-client-reservation-queue.component.scss']
})
export class ReadClientReservationQueueComponent {
  @Input() tableTitle: string = "Booking";
  @Input() dataToDisplay: booking[] = [];

  @Input() clientId: number = 0;

  displayedColumns: string[] = ['clientId', 'name', 'dateAndTime', 'companySize', 'description', 'actions'];

  deleteReservation(number: number) {
    this.reservationsService.deleteReservation(number)
      .pipe(
        switchMap(() => this.reservationsService.getReservations("ClientId", this.clientId, 1))
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

  getReservationOfUser() {
    console.log("client id to get" + this.clientId);
    this.reservationsService.getReservations("ClientId", this.clientId, 1)
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

  updateReservation(reservation: booking) {
    this.generalLogicService.updateReservation(reservation);
  }

  onOkClick() {
    this.generalLogicService.closeDialog();
    console.info("Ok Clicked");
    return;
  }

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
    private reservationsService: RestaurantBookingService,
    private generalLogicService: GeneralLogicService)
  {
    this.clientId = this.data;
  }

  ngOnInit() {
    this.getReservationOfUser();
  }
}
