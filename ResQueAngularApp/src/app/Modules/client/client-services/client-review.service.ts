import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { review } from 'src/app/Models/Review';

@Injectable({
  providedIn: 'root'
})
export class ClientReviewService {
  private apiUrl = 'http://localhost:7198';

  constructor(private http: HttpClient) { }

  createReview(queue: review): Observable<any> {
    const headers = new HttpHeaders({ 
      'accept': 'text/plain', 
      'Content-Type': 'application/json' 
    });
    const body = JSON.stringify(queue);
    return this.http.post<any>(`${this.apiUrl}/reviews`, body, { headers: headers });
  }

  getReviews(attributeName: string, value: number, comparisonType: number): Observable<any> {
    let params = new HttpParams();
    params = params.append('attributeName', attributeName);
    params = params.append('value', value);
    params = params.append('comparisonType', comparisonType.toString());
    
    return this.http.get<review[]>(`${this.apiUrl}/reviews`, { params });
}

  getReviewByNumber(number: number): Observable<review> {
    return this.http.get<review>(`${this.apiUrl}/reviews/${number}`);
  }

  deleteReview(number: number): Observable<any>{
    return this.http.delete<review>(`${this.apiUrl}/reviews/${number}`);
  }

  updateReview(reviewId: number, updatedValues: Record<string, object>): Observable<review> {
    return this.http.patch<review>(`${this.apiUrl}/reviews/${reviewId}`, updatedValues);
  }
}
