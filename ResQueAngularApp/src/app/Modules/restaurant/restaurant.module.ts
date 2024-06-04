import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { RestaurantMainPageComponent } from './restaurant-main-page/restaurant-main-page.component';
import { RestaurantQueueComponent } from './restaurant-main-page/restaurant-queue/restaurant-queue.component';
import { RestaurantBookingComponent } from './restaurant-main-page/restaurant-booking/restaurant-booking.component';
import { RestaurantBookingHistoryComponent } from './restaurant-main-page/restaurant-booking-history/restaurant-booking-history.component';
import { RestaurantBookingRequestComponent } from './restaurant-main-page/restaurant-booking-request/restaurant-booking-request.component';
import { RestaurantMenuComponent } from './restaurant-main-page/restaurant-menu/restaurant-menu.component';
import { RestaurantDishComponent } from './restaurant-main-page/restaurant-dish/restaurant-dish.component';
import { RestaurantSettingsComponent } from './restaurant-settings/restaurant-settings.component';



@NgModule({
  declarations: [
    RestaurantMainPageComponent,
    RestaurantQueueComponent,
    RestaurantBookingComponent,
    RestaurantBookingHistoryComponent,
    RestaurantBookingRequestComponent,
    RestaurantMenuComponent,
    RestaurantDishComponent,
    RestaurantSettingsComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class RestaurantModule { }
