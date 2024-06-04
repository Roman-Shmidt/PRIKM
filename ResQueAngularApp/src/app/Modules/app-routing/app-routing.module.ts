import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from '../auth/auth.component';
import { AuthModule } from '../auth/auth.module';
import { AppRoutingComponent } from './app-routing.component';
import { authGuard } from 'src/app/AuthGuard/auth.guard';
import { ClientModule } from '../client/client.module';
import { MainPageComponent } from '../client/main-page//main-page.component';
import { DetailsPageComponent } from '../client/details-page/details-page.component';
import { RestaurantModule } from '../restaurant/restaurant.module';
import { RestaurantMainPageComponent } from '../restaurant/restaurant-main-page/restaurant-main-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/authorization', pathMatch: 'full' },
  { path: 'authorization', component: AuthComponent },
  { path: 'main-page', component: MainPageComponent },
  { path: 'details-page/:id', component: DetailsPageComponent },
  { path: 'restaurant/:id', component: RestaurantMainPageComponent }
  // other routes...
];

@NgModule({
  declarations: [
    AppRoutingComponent
  ],
  imports: [RouterModule.forRoot(routes),
    AuthModule,
    ClientModule,
    RestaurantModule
  ],
  exports: [RouterModule, AppRoutingComponent]
})
export class AppRoutingModule { }