import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { booking } from 'src/app/Models/Booking';

@Injectable({
  providedIn: 'root'
})
export class ClientBookingService {
  private apiUrl = 'http://localhost:7198';

  constructor(private http: HttpClient) { }

  creatReservation(queue: booking): Observable<any> {
    const headers = new HttpHeaders({ 
      'accept': 'text/plain', 
      'Content-Type': 'application/json' 
    });
    const body = JSON.stringify(queue);
    console.log("we try to post");
    return this.http.post<any>(`${this.apiUrl}/reservations`, body, { headers: headers });
  }

  getReservations(attributeName: string, value: number, comparisonType: number): Observable<any> {
    let params = new HttpParams();
    params = params.append('attributeName', attributeName);
    params = params.append('value', value);
    params = params.append('comparisonType', comparisonType.toString());
    return this.http.get<booking[]>(`${this.apiUrl}/reservations`, { params });
  }

  getReservationByNumber(number: number): Observable<booking> {
    return this.http.get<booking>(`${this.apiUrl}/reservations/${number}`);
  }

  deleteReservation(number: number): Observable<any>{
    return this.http.delete<booking>(`${this.apiUrl}/reservations/${number}`);
  }

  updateReservation(dishId: number, updatedValues: Record<string, object>): Observable<booking> {
    return this.http.patch<booking>(`${this.apiUrl}/reservations/${dishId}`, updatedValues);
  }
}
