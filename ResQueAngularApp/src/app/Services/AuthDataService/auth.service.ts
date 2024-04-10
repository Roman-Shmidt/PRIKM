import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private cookieService: CookieService,
    public jwtHelper: JwtHelperService) { }

  saveToken(token: string) {
    // Зберігаємо токен на 30 хвилин
    const expirationDate = new Date();
    expirationDate.setMinutes(expirationDate.getMinutes() + 30);
    this.cookieService.set('accessToken', token, expirationDate);
    localStorage.setItem('accessToken', token);
  }

  getToken() {
    return this.cookieService.get('accessToken');
  }
  
  getDecodedToken() {
    const token = this.getToken();
    const decodedToken = this.jwtHelper.decodeToken(token);
    return decodedToken;
  }
  
  deleteToken() {
    this.cookieService.delete('accessToken');
  }
  
  
}
