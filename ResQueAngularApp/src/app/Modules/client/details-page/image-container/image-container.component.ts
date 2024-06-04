import { Component, Input } from '@angular/core';


@Component({
  selector: 'image-container',
  templateUrl: './image-container.component.html',
  styleUrls: ['./image-container.component.scss']
})
export class ImageContainerComponent {
  @Input() imageUrl: string = 'https://www.unreservedmedia.com/wp-content/uploads/2020/05/orlova-maria-oMTlhdFUhdI-unsplash-1280x853.jpg';
}
