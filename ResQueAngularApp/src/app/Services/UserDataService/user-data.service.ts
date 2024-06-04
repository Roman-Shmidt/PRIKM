import { Injectable } from '@angular/core';
import { User } from './../../Models/User';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {
  private apiUrl = 'http://localhost:7198';

  constructor(private http: HttpClient) { }

  createUser(user: User): Observable<any> {
    const headers = new HttpHeaders({ 
      'accept': 'text/plain', 
      'Content-Type': 'application/json' 
    });
    const body = JSON.stringify(user);
    return this.http.post<any>(`${this.apiUrl}/users`, body, { headers: headers });
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.apiUrl}/users`);
  }

  getUserByNumber(number: number): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}/users/${number}`);
  }

  login(email: string, password: string): Observable<any> {
    const loginUrl = `${this.apiUrl}/token`; // Замініть на ваш URL для ендпоїнта авторизації
    const requestBody = {
      email: email,
      password: password
    };

    return this.http.post<any>(loginUrl, requestBody);
  }
}
