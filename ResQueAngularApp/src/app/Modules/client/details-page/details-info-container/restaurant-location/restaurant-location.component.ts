import { Component, Input } from '@angular/core';

@Component({
  selector: 'restaurant-location',
  templateUrl: './restaurant-location.component.html',
  styleUrls: ['./restaurant-location.component.scss']
})
export class RestaurantLocationComponent {
  @Input() latitude: number = 0;
  @Input() longitude: number = 0;
  @Input() center: google.maps.LatLngLiteral = {
    lat: this.latitude,
    lng: this.longitude
  };
}
