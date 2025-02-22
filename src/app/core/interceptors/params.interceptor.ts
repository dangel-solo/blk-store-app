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
export class ParamsInterceptor implements HttpInterceptor {
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const clonedRequest = request.clone({
      setParams: {
        key: API_CONFIG.PARAMS.key,
      },
    });

    return next.handle(clonedRequest);
  }
}
