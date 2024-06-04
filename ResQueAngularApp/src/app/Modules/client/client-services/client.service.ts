import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { client } from 'src/app/Models/Client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  private apiUrl = 'http://localhost:7198';

  constructor(private http: HttpClient) { }

  createClient(queue: client): Observable<any> {
    const headers = new HttpHeaders({ 
      'accept': 'text/plain', 
      'Content-Type': 'application/json' 
    });
    const body = JSON.stringify(queue);
    return this.http.post<any>(`${this.apiUrl}/clients`, body, { headers: headers });
  }

  getClients(attributeName: string, value: number, comparisonType: number): Observable<any> {
    let params = new HttpParams();
    params = params.append('attributeName', attributeName);
    params = params.append('value', value);
    params = params.append('comparisonType', comparisonType.toString());
  
    return this.http.get<client[]>(`${this.apiUrl}/clients`, { params });
}

  getClientByNumber(number: number): Observable<client> {
    return this.http.get<client>(`${this.apiUrl}/clients/${number}`);
  }

  deleteClient(number: number): Observable<any>{
    return this.http.delete<client>(`${this.apiUrl}/clients/${number}`);
  }

  updateClient(clientId: number, updatedValues: Record<string, object>): Observable<client> {
    return this.http.patch<client>(`${this.apiUrl}/clients/${clientId}`, updatedValues);
  }
}
