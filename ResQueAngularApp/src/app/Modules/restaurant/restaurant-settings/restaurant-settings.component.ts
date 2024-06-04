import { Component } from '@angular/core';
import { restaurant } from 'src/app/Models/Restaurant';
import { RestaurantService } from '../resturant-services/restaurant.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-restaurant-settings',
  templateUrl: './restaurant-settings.component.html',
  styleUrls: ['./restaurant-settings.component.scss']
})
export class RestaurantSettingsComponent {
  restaurant: restaurant = new restaurant(0, false, false, "default", "default",
    "default", "default", 5, new Date, new Date, "", 0, 0);
  originalRestaurant: restaurant = new restaurant(0, false, false, "default", "default",
    "default", "default", 5, new Date, new Date, "", 0, 0);

  updatedValues: Record<string, any> = {};

  constructor(private route: ActivatedRoute,
    private restaurantService: RestaurantService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.restaurant.id = params['id'];
    });

    console.log(this.restaurant.id);
    // you might want to get the restaurant details here based on some id
    this.refreshRestaurant();
  }

  onApplyClick() {


    this.updatedValues['Name'] = this.restaurant.name;
    this.updatedValues['Image'] = this.restaurant.image;
    this.updatedValues['Telephone'] = this.restaurant.telephone;
    this.updatedValues['Address'] = this.restaurant.address;
    this.updatedValues['LongitudeGoogleMap'] = this.restaurant.longitude;
    this.updatedValues['LatitudeGoogleMap'] = this.restaurant.latitude;
    this.updatedValues['About'] = this.restaurant.about;
    this.updatedValues['OpeningTime'] = this.restaurant.openingTime;
    this.updatedValues['ClosingTime'] = this.restaurant.closingTime;

    this.restaurantService.updateRestaurant(this.restaurant.id, this.updatedValues).subscribe({
      next: (response) => {
        console.log(response);
        this.refreshRestaurant();  // Refresh the data after update
      },
      error: (error) => {
        console.error(error);
      }
    });

  }

  onRevertClick() {
    console.log(this.restaurant);
    console.log(this.originalRestaurant);
    this.restaurant = JSON.parse(JSON.stringify(this.originalRestaurant));  // revert to original data
  }

  refreshRestaurant() {
    this.restaurantService.getRestaurantByNumber(this.restaurant.id).subscribe({
      next: (response) => {
        this.restaurant = response.object;
        this.originalRestaurant = JSON.parse(JSON.stringify(response.object));
      },
      error: (error) => {
        console.error(error);
      }
    });
  }
}
