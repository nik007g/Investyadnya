import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiCallService {

  constructor(private http: HttpClient) { }

  getDemoApi(): Observable<any>{
    return this.http.get('https://investyadnya.in/getAllBooksForMenuFromMap');
  }
  getCatchedCompanyDetails(): Observable<any>{
    const headers = new HttpHeaders({
      'Access-Control-Allow-Origin': '*'
    });
    return this.http.get('https://investyadnya.in/getLatestBlogsByBlogType?blogType=Stock');
  }
  getLatestVideos():Observable<any>{
    return this.http.get('https://investyadnya.in/getLatestVideos');
  }
  getSpecificBook(id: number):Observable<any>{
    return this.http.get('https://investyadnya.in/getBookById?bookId='+ id);
  }
  getCatchedCompanyDetails1():Observable<any>{
    return this.http.get('https://investyadnya.in/getCachedCompanyDetails');
  }
  getCompanyResearchRating(companyId: number):Observable<any>{
    return this.http.get('https://investyadnya.in/getCompanyResearchLinks?companyId='+ companyId);
  }
}
