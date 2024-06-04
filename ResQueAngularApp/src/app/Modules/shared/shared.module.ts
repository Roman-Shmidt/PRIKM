import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppButtonComponent } from 'src/app/Components/app-button/app-button.component';
import { AppInputComponent } from 'src/app/Components/app-input/app-input.component';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {BrowserModule} from '@angular/platform-browser';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatNativeDateModule} from '@angular/material/core';
import {HttpClientModule} from '@angular/common/http';
import { MaterialModule } from '../material/material.module';
import { BackgroundContainerComponent } from 'src/app/Components/background-container/background-container.component';
import { NgChartsModule } from 'ng2-charts';
import { RestaurantStatusComponent } from 'src/app/Components/restaurant-status/restaurant-status.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { GMapsComponent } from 'src/app/Components/gmaps/gmaps.component';
import { MakeBookingDialogComponent } from 'src/app/Components/make-booking-dialog/make-booking-dialog.component';
import { MakeReviewDialogComponent } from 'src/app/Components/make-review-dialog/make-review-dialog.component';
import { ReadReviewsDialogComponent } from 'src/app/Components/read-reviews-dialog/read-reviews-dialog.component';
import { TakeQueueDialogComponent } from 'src/app/Components/take-queue-dialog/take-queue-dialog.component';
import { AddDishDialogComponent } from 'src/app/Components/add-dish-dialog/add-dish-dialog.component';
import { AddMenuDialogComponent } from 'src/app/Components/add-menu-dialog/add-menu-dialog.component';
import { StarRatingComponent } from 'src/app/Components/star-rating/star-rating.component';
import { PageTopComponent } from 'src/app/Components/page-top/page-top.component';

import { 
	IgxTimePickerModule,
	IgxInputGroupModule,
	IgxIconModule,
  IgxDatePickerModule
} from "igniteui-angular";

import { UpdateDishComponent } from 'src/app/Components/update-dish-dialog/update-dish.component';
import { UpdateMenuComponent } from 'src/app/Components/update-menu-dialog/update-menu.component';
import { CheckMenuDishesComponent } from 'src/app/Components/check-menu-dishes/check-menu-dishes.component';
import { UpdateReservationDialogComponent } from 'src/app/Components/update-reservation-dialog/update-reservation-dialog.component';
import { ReadHelpComponent } from 'src/app/Components/read-help/read-help.component';
import { ReadClientReservationQueueComponent } from 'src/app/Components/read-client-reservation-queue/read-client-reservation-queue.component';
import { ReadClientQueueComponent } from 'src/app/Components/read-client-queue/read-client-queue.component';





@NgModule({
  declarations: [
    AppButtonComponent,
    AppInputComponent,
    BackgroundContainerComponent,
    RestaurantStatusComponent,
    GMapsComponent,
    MakeBookingDialogComponent,
    MakeReviewDialogComponent,
    ReadReviewsDialogComponent,
    TakeQueueDialogComponent,
    AddDishDialogComponent,
    AddMenuDialogComponent,
    UpdateDishComponent,
    UpdateMenuComponent,
    UpdateReservationDialogComponent,
    CheckMenuDishesComponent,
    StarRatingComponent,
    PageTopComponent,
    ReadHelpComponent,
    ReadClientReservationQueueComponent,
    ReadClientQueueComponent
  ],
  imports: [
    CommonModule,
    MatInputModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    MaterialModule,
    NgChartsModule,
    GoogleMapsModule,
    IgxTimePickerModule,
    IgxInputGroupModule,
    IgxIconModule,
    IgxDatePickerModule
  ],
  exports: [
    CommonModule,
    MatInputModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    MaterialModule,
    AppButtonComponent,
    AppInputComponent,
    BackgroundContainerComponent,
    RestaurantStatusComponent,
    NgChartsModule,
    GoogleMapsModule,
    GMapsComponent,
    MakeBookingDialogComponent,
    MakeReviewDialogComponent,
    ReadReviewsDialogComponent,
    TakeQueueDialogComponent,
    AddDishDialogComponent,
    AddMenuDialogComponent,
    UpdateDishComponent,
    UpdateMenuComponent,
    UpdateReservationDialogComponent,
    CheckMenuDishesComponent,
    StarRatingComponent,
    PageTopComponent,
    ReadHelpComponent,
    ReadClientReservationQueueComponent,
    ReadClientQueueComponent,
    IgxTimePickerModule,
    IgxInputGroupModule,
    IgxIconModule,
    IgxDatePickerModule
  ],
})
export class SharedModule { }
