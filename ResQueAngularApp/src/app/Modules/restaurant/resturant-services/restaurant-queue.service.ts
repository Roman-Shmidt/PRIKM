import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { queue } from 'src/app/Models/Queue';

@Injectable({
  providedIn: 'root'
})
export class RestaurantQueueService {
  private apiUrl = 'http://localhost:7198';

  constructor(private http: HttpClient) { }

  createQueue(queue: queue): Observable<any> {
    const headers = new HttpHeaders({ 
      'accept': 'text/plain', 
      'Content-Type': 'application/json' 
    });
    const body = JSON.stringify(queue);
    return this.http.post<any>(`${this.apiUrl}/queues`, body, { headers: headers });
  }

  getQueues(attributeName: string, value: number, comparisonType: number): Observable<any> {
    let params = new HttpParams();
    params = params.append('attributeName', attributeName);
    params = params.append('value', value);
    params = params.append('comparisonType', comparisonType.toString());
    return this.http.get<queue[]>(`${this.apiUrl}/queues`, { params });
  }

  getQueueByNumber(number: number): Observable<queue> {
    return this.http.get<queue>(`${this.apiUrl}/queues/${number}`);
  }

  deleteQueue(number: number): Observable<any>{
    return this.http.delete<queue>(`${this.apiUrl}/queues/${number}`);
  }

  updateQueue(dishId: number, updatedValues: Record<string, object>): Observable<queue> {
    return this.http.patch<queue>(`${this.apiUrl}/queues/${dishId}`, updatedValues);
  }
}
