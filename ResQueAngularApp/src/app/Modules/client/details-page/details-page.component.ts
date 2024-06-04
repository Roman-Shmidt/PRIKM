import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestaurantService } from '../../restaurant/resturant-services/restaurant.service';
import { restaurant } from 'src/app/Models/Restaurant';
import { CookieService } from 'ngx-cookie-service';
import { interval } from 'rxjs';

@Component({
  selector: 'details-page',
  templateUrl: './details-page.component.html',
  styleUrls: ['./details-page.component.scss']
})
export class DetailsPageComponent {
  public id: number = 0;
  public clientId: number = 1;
  public restaurant: restaurant = new restaurant(
    1,
    true,
    true,
    "Some about text",
    "123456789",
    "Restaurant Name",
    "Restaurant Address",
    4.5,
    new Date(),
    new Date(),
    "image-url",
    123.456,
    78.901
  );;

  public center: google.maps.LatLngLiteral = {
    lat: this.restaurant.latitude,
    lng: this.restaurant.longitude
  };

  constructor(private route: ActivatedRoute,
    private restaurantService: RestaurantService,
    private cookieService: CookieService) { }

  ngOnInit() {
    const clientIdFromCookie = this.cookieService.get('clientId');
    if (clientIdFromCookie) {
      this.clientId = Number(clientIdFromCookie);
    } else {
      interval(5000)
        .subscribe(() => {
          const clientIdFromCookie = this.cookieService.get('clientId');
          if (clientIdFromCookie) {
            this.clientId = Number(clientIdFromCookie);
          }
        });
    }
    console.log(this.clientId);

    this.route.params.subscribe(params => {
      this.id = params['id'];
      this.restaurant.id = this.id;
      // Виконайте потрібні дії зі значенням id
      console.log(this.id); // Приклад виведення в консоль
    });

    this.restaurantService.getRestaurantByNumber(this.id).subscribe({
      next: (response) => {
        console.log(response);
        console.log(this.center);
        this.restaurant = response.object;

        const [hours, minutes, seconds] = this.restaurant.openingTime.toString().split(':');
        const [hoursClose, minutesClose, secondsClose] = this.restaurant.closingTime.toString().split(':');

        const date = new Date();
        date.setHours(Number(hours));
        date.setMinutes(Number(minutes));
        date.setSeconds(Number(seconds));
        this.restaurant.openingTime = date;

        const date2 = new Date();
        date2.setHours(Number(hoursClose));
        date2.setMinutes(Number(minutesClose));
        date2.setSeconds(Number(secondsClose));
        this.restaurant.closingTime = date2;

        this.center.lat = this.restaurant.latitude;
        this.center.lng = this.restaurant.longitude;
        console.log(this.center);
      },
      error: (error) => {
        console.error(error);
      }
    });
  }
}
