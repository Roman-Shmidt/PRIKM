import { Component, Input } from '@angular/core';

@Component({
  selector: 'background-container',
  templateUrl: './background-container.component.html',
  styleUrls: ['./background-container.component.scss']
})
export class BackgroundContainerComponent {
  @Input() backgroundColor: string
  
  constructor() 
  {
    this.backgroundColor = 'white';
  }
}
