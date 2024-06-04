import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddDishDialogComponent } from 'src/app/Components/add-dish-dialog/add-dish-dialog.component';
import { AddMenuDialogComponent } from 'src/app/Components/add-menu-dialog/add-menu-dialog.component';
import { CheckMenuDishesComponent } from 'src/app/Components/check-menu-dishes/check-menu-dishes.component';
import { MakeBookingDialogComponent } from 'src/app/Components/make-booking-dialog/make-booking-dialog.component';
import { MakeReviewDialogComponent } from 'src/app/Components/make-review-dialog/make-review-dialog.component';
import { ReadClientQueueComponent } from 'src/app/Components/read-client-queue/read-client-queue.component';
import { ReadClientReservationQueueComponent } from 'src/app/Components/read-client-reservation-queue/read-client-reservation-queue.component';
import { ReadHelpComponent } from 'src/app/Components/read-help/read-help.component';
import { ReadReviewsDialogComponent } from 'src/app/Components/read-reviews-dialog/read-reviews-dialog.component';
import { TakeQueueDialogComponent } from 'src/app/Components/take-queue-dialog/take-queue-dialog.component';
import { UpdateDishComponent } from 'src/app/Components/update-dish-dialog/update-dish.component';
import { UpdateMenuComponent } from 'src/app/Components/update-menu-dialog/update-menu.component';
import { UpdateReservationDialogComponent } from 'src/app/Components/update-reservation-dialog/update-reservation-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class GeneralLogicService {
  public dialog: MatDialog;

  constructor(dialog: MatDialog) 
  { 
    this.dialog = dialog;
  }

  closeDialog(): void {
    this.dialog.closeAll();
  }

  public openReviews(data: any) {
    this.dialog.open(ReadReviewsDialogComponent, {
      data,
      width: '80%',
      height: '60%'
    });
  }

  public makeReview(data: any) {
    this.dialog.open(MakeReviewDialogComponent, {
      data,
      width: '70%',
      height: '45%'
    });
  }

  public makeBooking(data: any) {
    this.dialog.open(MakeBookingDialogComponent, {
      data,
      width: '70%',
      height: '65%'
    });
  }

  public takeQueue(data: any) {
    this.dialog.open(TakeQueueDialogComponent, {
      data,
      width: '50%',
      height: '40%'
    });
  }

  public addMenu(data: any) {
    this.dialog.open(AddMenuDialogComponent, {
      data,
      width: '50%',
      height: '40%'
    });
  }

  public updateMenu(data: any) {
    this.dialog.open(UpdateMenuComponent, {
      data,
      width: '50%',
      height: '40%'
    });
  }

  public checkMenuDishes(data: any) {
    this.dialog.open(CheckMenuDishesComponent, {
      data,
      width: '50%',
      height: '50%'
    });
  }

  public addDish(data: any) {
    this.dialog.open(AddDishDialogComponent, {
      data,
      width: '50%',
      height: '60%'
    });
  }

  public updateDish(data: any) {
    this.dialog.open(UpdateDishComponent, {
      data,
      width: '50%',
      height: '60%'
    });
  }

  public updateReservation(data: any) {
    this.dialog.open(UpdateReservationDialogComponent, {
      data,
      width: '60%',
      height: '65%'
    });
  }

  public openHelp(data: any) {
    this.dialog.open(ReadHelpComponent, {
      data,
      width: '60%',
      height: '60%'
    });
  }

  public readOwnReservationsQueues(data: any) {
    this.dialog.open(ReadClientReservationQueueComponent, {
      data,
      width: '75%',
      height: '60%'
    });
  }

  public readOwnQueue(data: any) {
    this.dialog.open(ReadClientQueueComponent, {
      data,
      width: '80%',
      height: '45%'
    });
  }
}
