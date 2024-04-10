import { Component, Inject, Input } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { dish } from 'src/app/Models/Dish';
import { RestaurantDishService } from 'src/app/Modules/restaurant/resturant-services/restaurant-dish.service';
import { RestaurantMenuService } from 'src/app/Modules/restaurant/resturant-services/restaurant-menu.service';
import { GeneralLogicService } from 'src/app/Services/GeneralLogicService/general-logic.service';

@Component({
  selector: 'app-check-menu-dishes',
  templateUrl: './check-menu-dishes.component.html',
  styleUrls: ['./check-menu-dishes.component.scss']
})
export class CheckMenuDishesComponent {
  @Input() dishes: dish[] = [];

  @Input() menuId: number = 0;

  displayedColumns: string[] = ['name', 'photoUrl', 'description', 'price'];

  constructor(@Inject(MAT_DIALOG_DATA) public data: number,
    private generalLogicService: GeneralLogicService,
    private menuService: RestaurantMenuService,
    private dishService: RestaurantDishService) 
  {
    this.menuId = data;
  }

  onOkClick() 
  {
    this.generalLogicService.closeDialog();
  }

  getDishes(): void {
    // Виконувати запит на сервер тут
    console.log('Запит на сервер Dishes INNER');
    this.dishService.getDishes("MenuId", this.menuId, 1).subscribe({
      next: (response) => {
        console.log(response);
        this.dishes = response.object;
      },
      error: (error) => {
        console.error(error);
      }
    });
  }

  ngOnInit(): void {
    this.getDishes();
    console.log(this.dishes);
  }
}
