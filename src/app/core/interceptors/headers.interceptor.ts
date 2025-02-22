import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_CONFIG } from '../constants/api-config';

@Injectable()
export class HeadersInterceptor implements HttpInterceptor {
  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const headers = request.clone({
      setHeaders: API_CONFIG.HEADERS,
    });

    return next.handle(headers);
  }
}
