import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page/main-page.component';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material/material.module';
import { MainPageContentComponent } from './main-page/main-page-content/main-page-content.component';
import { MainPageTopComponent } from './main-page/main-page-top/main-page-top.component';
import { RestaurantsListComponent } from './main-page/restaurants-list/restaurants-list.component';
import { RestaurantTileComponent } from './main-page/restaurant-tile/restaurant-tile.component';
import { DetailsPageComponent } from './details-page/details-page.component';
import { ImageContainerComponent } from './details-page/image-container/image-container.component';
import { DetailsInfoContainerComponent } from './details-page/details-info-container/details-info-container.component';
import { RestaurantDetailsComponent } from './details-page/details-info-container/restaurant-details/restaurant-details.component';
import { MenuContainerComponent } from './details-page/menu-container/menu-container.component';
import { RestaurantReviewsComponent } from './details-page/details-info-container/restaurant-reviews/restaurant-reviews.component';
import { RestaurantLocationComponent } from './details-page/details-info-container/restaurant-location/restaurant-location.component';
import { MenuListComponent } from './details-page/menu-list/menu-list.component';



@NgModule({
  declarations: [
    MainPageComponent,
    MainPageContentComponent,
    MainPageTopComponent,
    RestaurantsListComponent,
    RestaurantTileComponent,

    DetailsPageComponent,
    MenuContainerComponent,
    MenuListComponent,
    ImageContainerComponent,
    DetailsInfoContainerComponent,
    RestaurantDetailsComponent,
    RestaurantReviewsComponent,
    RestaurantLocationComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule
  ],
  exports: [
    MainPageComponent,
    MainPageContentComponent
  ]
})
export class ClientModule { }
