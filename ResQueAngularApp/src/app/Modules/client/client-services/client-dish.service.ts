import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { dish } from 'src/app/Models/Dish';

@Injectable({
  providedIn: 'root'
})
export class ClientDishService {
  private apiUrl = 'http://localhost:7198';

  constructor(private http: HttpClient) { }

  createDish(user: dish): Observable<any> {
    const headers = new HttpHeaders({ 
      'accept': 'text/plain', 
      'Content-Type': 'application/json' 
    });
    const body = JSON.stringify(user);
    return this.http.post<any>(`${this.apiUrl}/dishes`, body, { headers: headers });
  }

  getDishes(attributeName: string, value: number, comparisonType: number): Observable<any> {
    let params = new HttpParams();
    params = params.append('attributeName', attributeName);
    params = params.append('value', value);
    params = params.append('comparisonType', comparisonType.toString());
    return this.http.get<dish[]>(`${this.apiUrl}/dishes`, { params });
  }

  getDishByNumber(number: number): Observable<dish> {
    return this.http.get<dish>(`${this.apiUrl}/dishes/${number}`);
  }

  deleteDish(number: number): Observable<any>{
    return this.http.delete<dish>(`${this.apiUrl}/dishes/${number}`);
  }

  updateDish(dishId: number, updatedValues: Record<string, object>): Observable<dish> {
    return this.http.patch<dish>(`${this.apiUrl}/dishes/${dishId}`, updatedValues);
  }
}
