import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { booking } from 'src/app/Models/Booking';
import { RestaurantBookingService } from 'src/app/Modules/restaurant/resturant-services/restaurant-booking.service';
import { GeneralLogicService } from 'src/app/Services/GeneralLogicService/general-logic.service';

@Component({
  selector: 'app-update-reservation-dialog',
  templateUrl: './update-reservation-dialog.component.html',
  styleUrls: ['./update-reservation-dialog.component.scss']
})
export class UpdateReservationDialogComponent {
  public dateAndTime: Date;
  public companySize: number;
  public name: string;
  public description: string;
  
  updatedValues: Record<string, any> = {};

  constructor(@Inject(MAT_DIALOG_DATA) public data: booking,
    private generalLogicService: GeneralLogicService,
    private reservationService: RestaurantBookingService) 
  {
    this.dateAndTime = data.dateAndTime;
    this.companySize = data.companySize;
    this.name = data.name;
    this.description = data.description;
  }

  onOkClick() 
  {
    this.generalLogicService.closeDialog();
    
    this.updatedValues["DateAndTime"] = this.name;
    this.updatedValues["CompanySize"] = this.companySize;
    this.updatedValues["Name"] = this.name;
    this.updatedValues["Description"] = this.description;

    this.reservationService.updateReservation(
      this.data.id,
      this.updatedValues
    ).subscribe({
      next: (response) => {
        console.log(response);
      },
      error: (error) => {
        console.error(error);
      }
    });
    console.info("Success");
  }

  onCancelClick() {
    this.generalLogicService.closeDialog();
    console.info("Cancel Clicked");
    return;
  }
}
