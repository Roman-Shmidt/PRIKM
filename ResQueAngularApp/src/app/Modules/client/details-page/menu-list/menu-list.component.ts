import { Component, Input } from '@angular/core';
import { menu } from 'src/app/Models/Menu';
import { dish } from 'src/app/Models/Dish';
import { RestaurantMenuService } from 'src/app/Modules/restaurant/resturant-services/restaurant-menu.service';
import { RestaurantDishService } from 'src/app/Modules/restaurant/resturant-services/restaurant-dish.service';
import { forkJoin, interval, startWith, switchMap, takeWhile } from 'rxjs';

@Component({
  selector: 'menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.scss']
})
export class MenuListComponent {
  @Input() tablesData: menu[] | null = null;
  @Input() menus: menu[] = [];
  @Input() dishes: dish[] = [];
  private dishesForCopy: dish[] = [];
  @Input() restaurantId: number = 0;
  isActiveComponent: boolean = false;

  getMenus(): void {
    interval(15000)
      .pipe(
        startWith(0),  // Запустити одразу після ініціалізації
        switchMap(() => this.menuService.getMenus("RestaurantId", this.restaurantId, 1)),
        takeWhile(() => this.isActiveComponent)
      )
      .subscribe({
        next: (response) => {
          this.menus = response.object;
          const menuIds = this.menus.map(menu => menu.id);
          forkJoin(menuIds.map(id => this.dishService.getDishes("MenuId", id, 1))).subscribe(dishesResponses => {
            dishesResponses.forEach((dishesResponse, index) => {
              this.menus[index].dishes = dishesResponse.object;
            });
            this.tablesData = [...this.menus];  // Оновлюємо дані безпосередньо
          });
        },
        error: (error) => {
          console.error(error);
        }
      });
  }
  

  getDishesForMenu(menuId: number): void {
    // Виконувати запит на сервер тут
    console.log('Запит на сервер Dishes for Menu ' + menuId);
    this.dishService.getDishes("MenuId", menuId, 1).subscribe({
      next: (response) => {
        console.log(response);
        this.dishes = response.object;
        this.menus.find(menu => menu.id === menuId)!.dishes = this.dishes;
      },
      error: (error) => {
        console.error(error);
      }
    });
  }

  constructor(private menuService: RestaurantMenuService,
    private dishService: RestaurantDishService) {

  }

  ngOnInit(): void {
    this.isActiveComponent = true;
    this.getMenus();
  }

  ngOnDestroy(): void {
    this.isActiveComponent = false;
  }
}
