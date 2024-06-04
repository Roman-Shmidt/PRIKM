import { DataSource } from '@angular/cdk/table';
import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable, ReplaySubject, switchMap } from 'rxjs';
import { menu } from 'src/app/Models/Menu';
import { GeneralLogicService } from 'src/app/Services/GeneralLogicService/general-logic.service';
import { RestaurantMenuService } from '../../resturant-services/restaurant-menu.service';
import { RestaurantDishService } from '../../resturant-services/restaurant-dish.service';
import { restaurant } from 'src/app/Models/Restaurant';

@Component({
  selector: 'restaurant-menu',
  templateUrl: './restaurant-menu.component.html',
  styleUrls: ['./restaurant-menu.component.scss']
})
export class RestaurantMenuComponent {
  @Input() tableTitle: string = "Booking";
  @Input() dataToDisplay: menu[] = [];
  @Input() dataSource: ExampleDataSource = new ExampleDataSource(this.dataToDisplay);
  @Input() restaurant: restaurant =  new restaurant(0, false, false, "default", "default",
  "default", "default", 5, new Date, new Date, "", 0, 0);

  displayedColumns: string[] = ['id','name', 'photoUrl', 'actions'];
  dialog: MatDialog;

  addMenu() {
    this.generalLogicService.addMenu(this.restaurant);
  }

  updateMenu(menu: menu) {
    this.generalLogicService.updateMenu(menu);
  }

  checkMenuDishes(id: number) {
    this.generalLogicService.checkMenuDishes(id);
  }

  deleteMenu(number: number) {
    this.menuService.deleteMenu(number)
      .subscribe({
        next: (response) => {
          console.log(response);
          this.dataToDisplay = response.object;
        },
        error: (error) => {
          console.error(error);
        }
      });
    
  }


  
  constructor(dialog: MatDialog, private generalLogicService: GeneralLogicService,
    private menuService: RestaurantMenuService,
    private dishService: RestaurantDishService) 
  {
    this.dialog = dialog;
  }
}

class ExampleDataSource extends DataSource<menu> {
  private _dataStream = new ReplaySubject<menu[]>();

  constructor(initialData: menu[]) {
    super();
    this.setData(initialData);
  }

  connect(): Observable<menu[]> {
    return this._dataStream;
  }

  disconnect() {}

  setData(data: menu[]) {
    this._dataStream.next(data);
  }
}
