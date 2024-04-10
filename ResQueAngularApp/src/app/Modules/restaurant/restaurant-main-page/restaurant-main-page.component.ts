import { Component, Input } from '@angular/core';
import { booking } from 'src/app/Models/Booking';
import { dish } from 'src/app/Models/Dish';
import { menu } from 'src/app/Models/Menu';
import { RestaurantMenuService } from '../resturant-services/restaurant-menu.service';
import { forkJoin, interval, takeWhile } from 'rxjs';
import { RestaurantDishService } from '../resturant-services/restaurant-dish.service';
import { RestaurantService } from '../resturant-services/restaurant.service';
import { restaurant } from 'src/app/Models/Restaurant';
import { queue } from 'src/app/Models/Queue';
import { RestaurantBookingService } from '../resturant-services/restaurant-booking.service';
import { RestaurantQueueService } from '../resturant-services/restaurant-queue.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-restaurant-main-page',
  templateUrl: './restaurant-main-page.component.html',
  styleUrls: ['./restaurant-main-page.component.scss']
})
export class RestaurantMainPageComponent {
  @Input() reservations: booking[] = [];
  @Input() reservationsRequest: booking[] = [];
  @Input() reservationsHistory: booking[] = [];
  @Input() reservationsCurrent: booking[] = [];
  @Input() menus: menu[] = [];
  @Input() dishes: dish[] = [];
  private dishesToCopy: dish[] = [];
  @Input() queues: queue[] = [];
  updatedValues: Record<string, any> = {};

  restaurant: restaurant = new restaurant(0, false, false, "default", "default",
    "default", "default", 5, new Date, new Date, "", 0, 0);
  isActiveComponent: boolean = false;

  getMenus(): void {
    console.log('Запит на сервер Menu');
    this.menuService.getMenus("RestaurantId", this.restaurant.id, 1).subscribe({
      next: (response) => {
        this.menus = response.object;
        const dishesRequests = this.menus.map(menu => this.dishService.getDishes("MenuId", menu.id, 1));

        forkJoin(dishesRequests).subscribe(dishesResponses => {
          dishesResponses.forEach((dishResponse, index) => {
            const dishes: dish[] = dishResponse.object;
            this.dishesToCopy = this.dishesToCopy.concat(dishes);
            this.menus[index].dishes = dishes;
          });

          this.dishes = this.dishesToCopy;
        });
      },
      error: (error) => {
        console.error(error);
      }
    });

    interval(5000)
      .pipe(takeWhile(() => this.isActiveComponent))
      .subscribe(() => {
        this.menuService.getMenus("RestaurantId", this.restaurant.id, 1).subscribe({
          next: (response) => {
            this.dishesToCopy = [];
            this.menus = response.object;
            const dishesRequests = this.menus.map(menu => this.dishService.getDishes("MenuId", menu.id, 1));

            forkJoin(dishesRequests).subscribe(dishesResponses => {
              dishesResponses.forEach((dishResponse, index) => {
                const dishes: dish[] = dishResponse.object;
                this.dishesToCopy = this.dishesToCopy.concat(dishes);
                this.menus[index].dishes = dishes;
              });

              this.dishes = this.dishesToCopy;
            });
          },
          error: (error) => {
            console.error(error);
          }
        });
        console.log('Запит на сервер через 15 секунд');
      });
  }

  getDishes(menuId: number): void {
    console.log('Запит на сервер Dishes');
    this.dishService.getDishes("MenuId", menuId, 1).subscribe({
      next: (response) => {
        const dishes: dish[] = response.object;
        this.dishesToCopy = this.dishesToCopy.concat(dishes);
        console.log(this.dishesToCopy);
        // Знайдіть відповідне меню та збережіть до нього страви
        let menu = this.menus.find(m => m.id === menuId);
        if (menu) {
          menu.dishes?.concat(this.dishes);
        }
      },
      error: (error) => {
        console.error(error);
      }
    });
  }


  getQueues(): void {
    // Виконувати запит на сервер тут
    console.log('Запит на сервер Queues');
    this.queueService.getQueues("RestaurantId", this.restaurant.id, 1).subscribe({
      next: (response) => {
        console.log(response);
        this.queues = response.object;
      },
      error: (error) => {
        console.error(error);
      }
    });
    // Перевірка, якщо компонент все ще активний, запустити наступний запит через 15 секунд
    interval(5000)
      .pipe(takeWhile(() => this.isActiveComponent))
      .subscribe(() => {
        this.queueService.getQueues("RestaurantId", this.restaurant.id, 1).subscribe({
          next: (response) => {
            console.log(response);
            this.queues = response.object;
            console.info("Success GetDishes");
          },
          error: (error) => {
            console.error(error);
            console.info("Error GetDishes");
          }
        });
      });
  }

  getReservations(): void {
    // Виконувати запит на сервер тут
    this.reservationService.getReservations("RestaurantId", this.restaurant.id, 1).subscribe({
      next: (response) => {
        this.reservations = response.object;

        this.reservationsHistory = this.reservations.filter(r => r.isReservationCompleted);
        this.reservationsRequest = this.reservations.filter(r => !r.isReservationApproved);
        this.reservationsCurrent = this.reservations.filter(r => !r.isReservationCompleted && r.isReservationApproved);
      },
      error: (error) => {
        console.error(error);
      }
    });
    // Перевірка, якщо компонент все ще активний, запустити наступний запит через 15 секунд
    interval(5000)
      .pipe(takeWhile(() => this.isActiveComponent))
      .subscribe(() => {
        this.reservationService.getReservations("RestaurantId", this.restaurant.id, 1).subscribe({
          next: (response) => {
            this.reservations = response.object;

            this.reservationsHistory = this.reservations.filter(r => r.isReservationCompleted);
            this.reservationsRequest = this.reservations.filter(r => !r.isReservationApproved);
            this.reservationsCurrent = this.reservations.filter(r => !r.isReservationCompleted && r.isReservationApproved);
          },
          error: (error) => {
            console.error(error);
            console.info("Error GetDishes");
          }
        });
      });
  }

  getRestaurantByNumber(): void {
    // Виконувати запит на сервер тут
    console.log('Запит на сервер Restaurant');
    this.restaurantService.getRestaurantByNumber(this.restaurant.id).subscribe({
      next: (response) => {
        this.restaurant = response.object;
      },
      error: (error) => {
        console.error(error);
      }
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.restaurant.id = params['id'];
    });

    this.getRestaurantByNumber();

    this.isActiveComponent = true;
    this.getMenus();
    this.getQueues();
    this.getReservations();
  }

  ngOnDestroy(): void {
    this.isActiveComponent = false;
  }

  constructor(private route: ActivatedRoute,
    private menuService: RestaurantMenuService,
    private dishService: RestaurantDishService,
    private restaurantService: RestaurantService,
    private queueService: RestaurantQueueService,
    private reservationService: RestaurantBookingService) {
  }

  updateIsQueueOpen(): void {
    this.updatedValues["IsQueueOpen"] = this.restaurant.isQueueOpen;

    this.restaurantService.updateRestaurant(
      this.restaurant.id,
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

  updateIsBookingOpen(): void {
    this.updatedValues["IsReservationOpen"] = this.restaurant.isReservationOpen;

    this.restaurantService.updateRestaurant(
      this.restaurant.id,
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
}
