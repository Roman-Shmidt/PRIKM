import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { menu } from 'src/app/Models/Menu';

@Injectable({
  providedIn: 'root'
})
export class ClientMenuService {
  private apiUrl = 'http://localhost:7198';

  constructor(private http: HttpClient) { }

  createMenu(menu: menu): Observable<any> {
    const headers = new HttpHeaders({ 
      'accept': 'text/plain', 
      'Content-Type': 'application/json' 
    });
    const body = JSON.stringify(menu);
    return this.http.post<any>(`${this.apiUrl}/menus`, body, { headers: headers });
  }

  getMenus(attributeName: string, value: number, comparisonType: number): Observable<any> {
    let params = new HttpParams();
    params = params.append('attributeName', attributeName);
    params = params.append('value', value);
    params = params.append('comparisonType', comparisonType.toString());
    return this.http.get<any[]>(`${this.apiUrl}/menus`, { params });
  }

  getMenuByNumber(number: number): Observable<menu> {
    return this.http.get<menu>(`${this.apiUrl}/menus/${number}`);
  }

  deleteMenu(number: number): Observable<any>{
    return this.http.delete<menu>(`${this.apiUrl}/menus/${number}`);
  }

  updateMenu(menuId: number, updatedValues: Record<string, object>): Observable<menu> {
    return this.http.patch<menu>(`${this.apiUrl}/menus/${menuId}`, updatedValues);
  }
}
