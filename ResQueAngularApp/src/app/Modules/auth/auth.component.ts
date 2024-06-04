import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { CookieService } from 'ngx-cookie-service';
import { User } from 'src/app/Models/User';
import { AuthService } from 'src/app/Services/AuthDataService/auth.service';
import { UserDataService } from 'src/app/Services/UserDataService/user-data.service';
import { ClientService } from '../client/client-services/client.service';
import { RestaurantService } from '../restaurant/resturant-services/restaurant.service';


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent {
  @Input() checked: boolean;
  @Input() isSignInPage: boolean;
  @Input() name: string = "";
  @Input() lastName: string = "";
  @Input() email: string = "";
  @Input() password: string = "";
  @Input() userName: string = "";

  constructor(private userService: UserDataService,
    private authService: AuthService,
    public jwtHelper: JwtHelperService,
    private cookieService: CookieService,
    private router: Router,
    private clientService: ClientService,
    private restaurantService: RestaurantService) {
    this.checked = false;
    this.isSignInPage = false;
  }

  onLoginClick() {
    this.userService.login(this.email, this.password).subscribe((response: any) => {
      const token = response.token;

      if (token) {
        this.authService.saveToken(token);
        // перейти до потрібної сторінки після успішного входу, наприклад:
        const decodedToken = this.jwtHelper.decodeToken(token);
        const userType = decodedToken.UserType;
        
        if (userType === "Restaurant") {
          console.log(decodedToken.UserId);
          this.restaurantService.getRestaurants("UserId", decodedToken.UserId, 1).subscribe((restaurants: any) => {
            if (restaurants.object.length > 0) {
              this.router.navigate(['restaurant/' + restaurants.object[0].id]);
            } else {
              // Handle the case when user does not have any restaurants
            }
          });
        }
        else if (userType === "Client") {
          console.log(decodedToken.UserId);
          this.clientService.getClients("UserId", decodedToken.UserId, 1).subscribe((clients: any) => {
            if (clients.object.length > 0) {
              console.log(clients.object);
              // Save clientId in cookies
              this.cookieService.set('clientId', clients.object[0].id);

              this.router.navigate(['main-page']);
            } else {
              // Handle the case when user does not have any restaurants
            }
          });
        }
        else {
          // Redirect to default page or handle the case for unknown user type
          this.router.navigate(['']);
        }
      } else {
        // обробка помилки, якщо токен не надійшов
      }
    });
  }

  onSignInClick() {
    this.isSignInPage = true;
    console.info("SignIn Clicked");
    return false;
  }

  onBackClick() {
    this.isSignInPage = false;
    console.info("Back Clicked");
    return false;
  }

  onRegisterClick() {
    if (this.checked) {
      this.userService.createUser(
        new User(0,
          "",
          0,
          false,
          this.password,
          this.name,
          this.lastName,
          this.email,
          true,
          this.userName,
          ""
        )
      ).subscribe({
        next: (response) => {
          console.log(response);
        },
        error: (error) => {
          console.error(error);
        }
      });
      console.info("Success");
    }
    else {
      this.userService.createUser(
        new User(0,
          "",
          1,
          false,
          this.password,
          this.name,
          this.lastName,
          this.email,
          true,
          this.userName,
          ""
        )
      ).subscribe({
        next: (response) => {
          console.log(response);
        },
        error: (error) => {
          console.error(error);
        }
      });
      console.info("Success");
    }
  }

  onValueChanged(value: string, field: string) {
    console.log(value + ": " + field);
    switch (field) {
      case "email":
        this.email = value;
        break;
      case "password":
        this.password = value;
        break;
      case "name":
        this.name = value;
        break;
      case "userName":
        this.userName = value;
        break;
      default:
        this.lastName = value;
    };
  }
}
