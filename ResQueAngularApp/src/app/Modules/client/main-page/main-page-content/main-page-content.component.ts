import { Component } from '@angular/core';
import { restaurant } from 'src/app/Models/Restaurant';
import { GeneralLogicService } from 'src/app/Services/GeneralLogicService/general-logic.service';
import { ClientRestaurantService } from '../../client-services/client-restaurant.service';
import { interval, takeWhile } from 'rxjs';

@Component({
  selector: 'main-page-content',
  templateUrl: './main-page-content.component.html',
  styleUrls: ['./main-page-content.component.scss']
})
export class MainPageContentComponent {
  public restaurants: restaurant[] = [];
  updatedValues: Record<string, any> = {};

  restaurant: restaurant = new restaurant(0, false, false, "default", "default",
    "default", "default", 5, new Date, new Date, "", 0, 0);
  isActiveComponent: boolean = false;


  constructor(private generalLogicService: GeneralLogicService,
    private clientRestaurantService: ClientRestaurantService)
  {
  }

  ngOnInit(): void {
    this.isActiveComponent = true;
    this.getRestaurants();
  }

  ngOnDestroy(): void {
    this.isActiveComponent = false;
  }

  getRestaurants(): void {
    // Виконувати запит на сервер тут
    console.log('Запит на сервер Menu');
    this.clientRestaurantService.getRestaurants("no filter", 0, 1).subscribe({
      next: (response) => {
        this.restaurants = response.object;

        this.restaurants.forEach((restaurant) => {

        const [hours, minutes, seconds] = restaurant.openingTime.toString().split(':');
        const [hoursClose, minutesClose, secondsClose] = restaurant.closingTime.toString().split(':');

        const date = new Date();
        date.setHours(Number(hours));
        date.setMinutes(Number(minutes));
        date.setSeconds(Number(seconds));
        restaurant.openingTime = date;

        const date2 = new Date();
        date2.setHours(Number(hoursClose));
        date2.setMinutes(Number(minutesClose));
        date2.setSeconds(Number(secondsClose));
        restaurant.closingTime = date2;
        });
      },
      error: (error) => {
        console.error(error);
      }
    });

    console.log(this.restaurants);
    // Перевірка, якщо компонент все ще активний, запустити наступний запит через 15 секунд
    interval(15000)
      .pipe(takeWhile(() => this.isActiveComponent))
      .subscribe(() => {
        this.clientRestaurantService.getRestaurants("no filter", 0, 1).subscribe({
          next: (response) => {
            this.restaurants = response.object;

            this.restaurants.forEach((restaurant) => {
    
            const [hours, minutes, seconds] = restaurant.openingTime.toString().split(':');
            const [hoursClose, minutesClose, secondsClose] = restaurant.closingTime.toString().split(':');
    
            const date = new Date();
            date.setHours(Number(hours));
            date.setMinutes(Number(minutes));
            date.setSeconds(Number(seconds));
            restaurant.openingTime = date;
    
            const date2 = new Date();
            date2.setHours(Number(hoursClose));
            date2.setMinutes(Number(minutesClose));
            date2.setSeconds(Number(secondsClose));
            restaurant.closingTime = date2;
            });
          },
          error: (error) => {
            console.error(error);
          }
        });
        console.info("Success");
        console.log('Запит на сервер через 15 секунд');
      });
  }

}
