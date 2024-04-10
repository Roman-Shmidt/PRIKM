import { DataSource } from '@angular/cdk/table';
import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable, ReplaySubject, switchMap } from 'rxjs';
import { dish } from 'src/app/Models/Dish';
import { GeneralLogicService } from 'src/app/Services/GeneralLogicService/general-logic.service';
import { RestaurantDishService } from '../../resturant-services/restaurant-dish.service';

@Component({
  selector: 'restaurant-dish',
  templateUrl: './restaurant-dish.component.html',
  styleUrls: ['./restaurant-dish.component.scss']
})
export class RestaurantDishComponent {
  @Input() tableTitle: string = "Booking";
  @Input() dataToDisplay: dish[] = [];
  @Input() dataSource: ExampleDataSource = new ExampleDataSource(this.dataToDisplay);

  displayedColumns: string[] = ['name', 'photoUrl', 'description', 'price', 'actions'];
  dialog: MatDialog;

  addDish() {
    this.generalLogicService.addDish("info");
  }

  updateDish(dish: dish) {
    this.generalLogicService.updateDish(dish);
  }

  deleteDish(number: number) {
    this.dishService.deleteDish(number)
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


  
  constructor(dialog: MatDialog,
    private generalLogicService: GeneralLogicService,
    private dishService: RestaurantDishService) {
    this.dialog = dialog;
  }
}

class ExampleDataSource extends DataSource<dish> {
  private _dataStream = new ReplaySubject<dish[]>();

  constructor(initialData: dish[]) {
    super();
    this.setData(initialData);
  }

  connect(): Observable<dish[]> {
    return this._dataStream;
  }

  disconnect() { }

  setData(data: dish[]) {
    this._dataStream.next(data);
  }
}
