import { Component, Inject, Input } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CookieService } from 'ngx-cookie-service';
import { booking } from 'src/app/Models/Booking';
import { restaurant } from 'src/app/Models/Restaurant';
import { ClientBookingService } from 'src/app/Modules/client/client-services/client-booking.service';
import { GeneralLogicService } from 'src/app/Services/GeneralLogicService/general-logic.service';

@Component({
  selector: 'app-make-booking-dialog',
  templateUrl: './make-booking-dialog.component.html',
  styleUrls: ['./make-booking-dialog.component.scss']
})
export class MakeBookingDialogComponent {
  public date = new Date();
  public companySize: number = 1;
  public details: string = "";
  public booking: booking = new booking(0,
    this.date,
    1,
    this.data.id,
    this.companySize,
    "",
    this.details,
    false,
    false);

  constructor(@Inject(MAT_DIALOG_DATA) public data: restaurant,
  private generalLogicService: GeneralLogicService,
  private clientReservationService: ClientBookingService,
  private cookieService: CookieService) 
  {
  }

  onOkClick() {
    this.booking.clientId = Number(this.cookieService.get('clientId'));
    this.clientReservationService.creatReservation(this.booking).subscribe({
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
    console.info("Cancel Clicked");
    return;
  }
}
