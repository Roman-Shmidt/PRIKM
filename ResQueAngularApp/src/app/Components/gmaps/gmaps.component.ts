import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { GoogleMap, MapInfoWindow, MapMarker } from '@angular/google-maps';

@Component({
  selector: 'gmaps',
  templateUrl: './gmaps.component.html',
  styleUrls: ['./gmaps.component.scss']
})
export class GMapsComponent implements OnInit {
  @ViewChild(GoogleMap) map!: GoogleMap;

  public commuteTime: string = 'No data';
  public commuteDistance: string = 'No data';

  userLocation: { lat: number, lng: number } | null = null;

  constructor() { }

  ngOnInit(): void {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.userLocation = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
        this.markerPosition = this.center;
        if(this.markerPosition){
          this.calculateAndDisplayRoute();
        }
      });
    } else {
      console.error("Geolocation is not supported by this browser.");
      this.markerPosition = this.center;
    }
  }

  public userMarkerOptions: google.maps.MarkerOptions = {
    icon: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png' // use a different URL if you want a different icon
  };

  @Input() center: google.maps.LatLngLiteral = {
    lat: 49.8425,
    lng: 24.032
  };
  @Input() zoom = 16;
  markerOptions: google.maps.MarkerOptions = {
    draggable: false
  };
  markerPosition: google.maps.LatLngLiteral = {
    lat: 49.8425,
    lng: 24.032
  };

  public openInfoWindow(marker: MapMarker, infoWindow: MapInfoWindow) {
    infoWindow.open(marker);
  }

  directionsService = new google.maps.DirectionsService();
  directionsDisplay = new google.maps.DirectionsRenderer();

  calculateAndDisplayRoute() {
    if(this.userLocation && this.markerPosition){
      const request = {
        origin: this.userLocation,
        destination: this.markerPosition,
        travelMode: google.maps.TravelMode.WALKING,  // Change this to 'DRIVING', 'WALKING' or 'BICYCLING' as needed
      };

      this.directionsService.route(request, (response, status) => {
        if (status === 'OK') {
          // Display the route on the map
          new google.maps.DirectionsRenderer({
            map: this.map.googleMap,
            directions: response,
          });
  
          if (response && response.routes && response.routes[0]?.legs) {
            // Display commute time and distance
            this.commuteTime = response?.routes[0]?.legs[0]?.duration?.text ?? 'No data';
            this.commuteDistance = response?.routes[0]?.legs[0]?.distance?.text ?? 'No data';
            console.log(this.center);
            console.log(`Commute time: ${this.commuteTime}`);
            console.log(`Commute distance: ${this.commuteDistance}`);
          }
        } else {
          console.error(`Error fetching directions ${response}`);
        }
      });
    }
  }
}
