import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { restaurant } from 'src/app/Models/Restaurant';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {
  private apiUrl = 'http://localhost:7198';

  constructor(private http: HttpClient) { }

  createRestaurant(menu: restaurant): Observable<any> {
    const headers = new HttpHeaders({ 
      'accept': 'text/plain', 
      'Content-Type': 'application/json' 
    });
    const body = JSON.stringify(menu);
    return this.http.post<any>(`${this.apiUrl}/restaurants`, body, { headers: headers });
  }

  getRestaurants(attributeName: string, value: number, comparisonType: number): Observable<any> {
    let params = new HttpParams();
    params = params.append('attributeName', attributeName);
    params = params.append('value', value);
    params = params.append('comparisonType', comparisonType.toString());
  
    return this.http.get<restaurant[]>(`${this.apiUrl}/restaurants`, { params });
  }

  getRestaurantByNumber(number: number): Observable<any> {
    return this.http.get<restaurant>(`${this.apiUrl}/restaurants/${number}`);
  }

  deleteRestaurant(number: number): Observable<restaurant>{
    return this.http.delete<restaurant>(`${this.apiUrl}/restaurants/${number}`);
  }

  updateRestaurant(restaurantId: number, updatedValues: Record<string, object>): Observable<restaurant> {
    return this.http.patch<restaurant>(`${this.apiUrl}/restaurants/${restaurantId}`, updatedValues);
  }
}
