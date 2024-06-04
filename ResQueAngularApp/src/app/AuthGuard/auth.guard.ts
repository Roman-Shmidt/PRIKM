import { ActivatedRouteSnapshot, Router, UrlTree } from '@angular/router';
import { inject, Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { CookieService } from 'ngx-cookie-service';
import { map } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

export const authGuard = (next: ActivatedRouteSnapshot): Observable<boolean | UrlTree> => {
  const router = inject(Router);
  const cookieService = inject(CookieService);
  const jwtHelper = inject(JwtHelperService);

  const token = cookieService.get('accessToken');

  if (token && !jwtHelper.isTokenExpired(token)) {
    return new Observable(observer => {
      observer.next(true);
      observer.complete();
    });
  }

  // Якщо токен відсутній або закінчився термін дії, перекидуємо на сторінку входу
  return of(router.parseUrl(''));
};
