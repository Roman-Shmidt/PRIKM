import { DataSource } from '@angular/cdk/collections';
import { Component, Input } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';
import { dish } from 'src/app/Models/Dish';

@Component({
  selector: 'menu-container',
  templateUrl: './menu-container.component.html',
  styleUrls: ['./menu-container.component.scss']
})
export class MenuContainerComponent {
  @Input() tableTitle: string = "Menu";
  @Input() dataToDisplay: dish[] = [];

  displayedColumns: string[] = ['name', 'description', 'price', 'photoUrl'];

  constructor() {}

  @Input() dataSource: ExampleDataSource = new ExampleDataSource(this.dataToDisplay);

  addData() {
    const randomElementIndex = Math.floor(Math.random() * this.dataToDisplay.length);
    this.dataToDisplay = [...this.dataToDisplay, this.dataToDisplay[randomElementIndex]];
    this.dataSource.setData(this.dataToDisplay);
  }

  removeData() {
    this.dataToDisplay = this.dataToDisplay.slice(0, -1);
    this.dataSource.setData(this.dataToDisplay);
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

  disconnect() {}

  setData(data: dish[]) {
    this._dataStream.next(data);
  }
}
