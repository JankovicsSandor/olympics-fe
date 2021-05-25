import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class BaseHttpClientService {
  private apiUrl: string;
  constructor(protected url: string, protected http: HttpClient) {
    this.apiUrl = url;
  }

  get<T>(path: string): Observable<T> {
    return <Observable<T>>this.http.get(
      this.apiUrl + path
    ).pipe(catchError(error => {
      console.log("Status: " + error.status, "Error message: " + error.error.reason);
      return throwError(error);
    }));
  }

  post<T>(path: string, item: any): Observable<T> {
    return <Observable<T>>this.http.post(
      this.apiUrl + path,
      item
    ).pipe(catchError(error => {
      console.log("Status: " + error.status, "Error message: " + error.error.reason);
      return throwError(error);
    }));
  }

  put<T>(path: string, item: any): Observable<T> {
    return <Observable<T>>this.http.put(
      this.apiUrl + path,
      item,
    ).pipe(catchError(error => {
      console.log("Status: " + error.status, "Error message: " + error.error.reason);
      return throwError(error);
    }));
  }

  delete<T>(path: string): Observable<T> {
    return <Observable<T>>this.http.delete(
      this.apiUrl + path
    ).pipe(catchError(error => {
      console.log("Status: " + error.status, "Error message: " + error.error.reason);
      return throwError(error);
    }));
  }
}
