import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
  HttpParams,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  private readonly API_URL = environment.apiUrl;

  constructor(private http: HttpClient) {}

  private request<T>(
    method: 'get' | 'post' | 'put' | 'delete',
    endpoint: string,
    data?: any,
    headers?: HttpHeaders,
    params?: HttpParams
  ): Observable<T> {
    const url = `${this.API_URL}/${endpoint}`;
    const httpOptions = { headers, params };

    switch (method) {
      case 'get':
        return this.http.get<T>(url, httpOptions).pipe(
          map((response) => response),
          catchError(this.handleError)
        );
      case 'post':
        return this.http.post<T>(url, data, httpOptions).pipe(
          map((response) => response),
          catchError(this.handleError)
        );
      case 'put':
        return this.http.put<T>(url, data, httpOptions).pipe(
          map((response) => response),
          catchError(this.handleError)
        );
      case 'delete':
        return this.http.delete<T>(url, httpOptions).pipe(
          map((response) => response),
          catchError(this.handleError)
        );
      default:
        return throwError(() => new Error('HTTP method not supported'));
    }
  }

  get<T>(
    endpoint: string,
    params?: HttpParams,
    headers?: HttpHeaders
  ): Observable<T> {
    return this.request<T>('get', endpoint, null, headers, params);
  }

  post<T>(endpoint: string, data: any, headers?: HttpHeaders): Observable<T> {
    return this.request<T>('post', endpoint, data, headers);
  }

  put<T>(endpoint: string, data: any, headers?: HttpHeaders): Observable<T> {
    return this.request<T>('put', endpoint, data, headers);
  }

  delete<T>(endpoint: string, headers?: HttpHeaders): Observable<T> {
    return this.request<T>('delete', endpoint, null, headers);
  }

  private handleError(error: HttpErrorResponse) {
    let errorMessage = 'Error: Unknown error';
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Error: ${error.error.message}`;
    } else {
      errorMessage = `Error ${error.status}: ${error.message}`;
    }
    console.error(errorMessage);
    return throwError(() => new Error(errorMessage));
  }
}
